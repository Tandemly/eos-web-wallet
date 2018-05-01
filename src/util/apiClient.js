// import moment from "moment";
import { merge, uniq, map, flatMap } from "lodash";
import { Buffer } from "buffer";
import eos from "eosjs";

const { ecc, Fcbuffer } = eos.modules;

// Required at front of all transactions.
// NOTE: This is a default of 64 '0's, even though it's not implemented in eosd yet
const chainId = new Buffer("00".repeat(32), "hex");

const eosEndpoint =
  process.env.NODE_ENV === "test"
    ? process.env.REACT_APP_EOSD_TESTS_URI
    : process.env.REACT_APP_EOSD_URI;

const apiEndpoint =
  process.env.NODE_ENV === "test"
    ? process.env.REACT_APP_API_TESTS_URI
    : process.env.REACT_APP_API_URI;

const authHeader = {
  Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
};

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json"
  }
};

const defaultAPIOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    ...authHeader
  }
};
// Grab the correct, sorted scope from the list of messages
// intended for a transaction
// const getScope = messages =>
//   uniq(
//     flatMap(messages, msg => [
//       msg.code,
//       ...map(msg.authorization, auth => auth.account)
//     ])
//   ).sort();

const rejectBadResponse = (response: Response): mixed =>
  response.ok || Promise.reject(response);

const request = async (
  path: string,
  options: mixed = {},
  mergeDefaults: boolean = true
) => {
  const opts = mergeDefaults ? merge({}, defaultOptions, options) : options;
  try {
    const resp = await fetch(path, opts);
    console.log("<resp>", resp);
    await rejectBadResponse(resp);
    // only attempt to parse JSON if proper content-type
    if (resp.headers && resp.headers.get("content-type").indexOf("json") > -1)
      return resp.json();
    return resp.text();
  } catch (error) {
    console.log(error);
    if (typeof error === "string") {
      return Promise.reject(error);
    }
    if (error instanceof Error) {
      return Promise.reject(error);
    }
    const data =
      error.headers && error.headers.get("content-type").indexOf("json") > -1
        ? await error.json()
        : await error.text();
    return Promise.reject(data);
  }
};

const configureClient = (target, opts = {}) => {
  if (!opts.keyProvider)
    throw new Error(`api client connection needs a keyProvider`);

  const eosNode = eos.Testnet({
    keyProvider: opts.keyProvider,
    httpEndpoint: eosEndpoint,
    debug: process.env.NODE_ENV !== "production",
    broadcast: false
  });

  return Object.assign(target, {
    keyProvider: opts.keyProvider,
    eos: eosNode
  });
};

class APIClient {
  constructor(opts) {
    configureClient(this, opts);
    this.structs = this.eos.fc.structs;
  }

  setKeyProvider(keyProvider) {
    this.keyProvider = keyProvider;
    console.log("--> set keyProvider:", this.keyProvider);
  }

  async get(path, opts = {}) {
    const options = Object.assign({}, defaultAPIOptions, opts);
    return await request(`${apiEndpoint}${path}`, options);
  }

  async post(path, data, opts = {}) {
    const options = Object.assign({}, defaultAPIOptions, opts, {
      method: "POST",
      headers: authHeader,
      body: JSON.stringify(data)
    });
    return await request(`${apiEndpoint}${path}`, options);
  }

  async postTransaction(path, data, opts = {}) {
    let { /* scope ,*/ actions } = data;

    if (!actions) {
      throw new Error("APIClient.post() data missing `actions` property");
    }
    if (!Array.isArray(actions)) {
      throw new Error(
        "APIClient.post() actions should be an array of one or more actions"
      );
    }
    // if (!scope) {
    //   // Attempt to get scope from messages
    //   scope = getScope(messages);
    // }
    // // ensure scope is unique and sorted ascending alphabetically
    // scope = uniq(scope).sort();

    // build a public->private key mapping
    const keyMap = this.keyProvider.reduce((map, wif) => {
      map[ecc.privateToPublic(wif)] = wif;
      return map;
    }, {});

    try {
      // Get info on head on chain
      console.log(eosEndpoint);
      const info = await request(`${eosEndpoint}/v1/chain/get_info`);
      const head = new Date(`${info.head_block_time}Z`);
      head.setSeconds(head.getSeconds() + 60);
      const expr = head.toISOString().split(".")[0];
      // const expr = moment(new Date(`${info.head_block_time}Z`))
      //   .add(60, "seconds")
      //   .toISOString()
      //   .split(".")[0];

      // Build transaction from data
      const transaction = {
        ref_block_num: info.head_block_num & 0xffff,
        ref_block_prefix: new Buffer(info.head_block_id, "hex").readUInt32LE(8),
        region: 0,
        expiration: expr,
        // scope: [],
        // read_scope: [],
        actions,
        // compression: "none",
        // status: "",
        max_kcpu_usage: 0,
        max_net_usage_words: 0,
        delay_sec: 0,
        // id: "",
        // compression: "none",
        context_free_data: [],
        packed_bandwidth_words: 0,
        context_free_cpu_bandwidth: 0,
        context_free_actions: []
      };
      // construct a buffer of the transaction to sign
      const trBuffer = Buffer.concat([
        chainId,
        Fcbuffer.toBuffer(this.structs.transaction, transaction)
        // Fcbuffer.toBuffer("transaction", transaction)
      ]);
      console.log("structs:", this.structs);

      // Convert action.data to binary hex representation (shouldn't be needed)
      // TODO: backend SHOULD accept action.data as JSON, but is currently flakey
      // and throwing cast errors. Must do this before calling getRequiredKeys, as
      // that endpoint is part of the problem.
      transaction.actions = transaction.actions.map(action => {
        const buf = Fcbuffer.toBuffer(this.structs.transfer, action.data);
        // const buf = Fcbuffer.toBuffer(this.structs.action, action);
        action.data = buf.toString("hex");
        return action;
      });

      const { required_keys } = await this.eos.getRequiredKeys(
        transaction,
        Object.keys(keyMap)
      );

      const signatures = [];
      (required_keys || []).forEach(pubKey => {
        if (!keyMap[pubKey]) {
          throw new Error(
            `APIClient: missing necessary private key for signing, needs private key for ${
              pubKey
            }`
          );
        }
        signatures.push(ecc.Signature.sign(trBuffer, keyMap[pubKey]).toString());
      });

      const txn = {
        compression: "none",
        transaction,
        signatures
      };

      return await this.post(path, txn, opts);
    } catch (err) {
      console.error("fetch error:", err);
      return Promise.reject(err.statusText || err);
    }
  }
}

// Export singleton instance
export let apiClient = new APIClient({ keyProvider: [] });

// Export class
export default APIClient;
