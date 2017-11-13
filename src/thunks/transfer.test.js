import configureMockStore from "redux-mock-store";
import middlewares from "middleware";
import { doTransfer } from "thunks/transfer";
import { succeedPostTransaction } from "redux-modules/transfer/actions";
import { tryGetTransactions } from "redux-modules/transactions/actions";
import { tryGetBalance } from "redux-modules/balance/actions";

const mockStore = configureMockStore(middlewares);

describe("doTransfer", () => {
  it("on successful transaction POST, dispatches succeedPostTransaction action", async () => {
    const store = mockStore({
      login: {
        isAuthenticated: true,
        user: {
          account_name: "inita",
          id_token:
            "88769942b62c0a2b3d86506d168daf97928167e9e77b5db3678e176fcd55febc",
          access_token:
            "59d2aed2c8c5ac5f75bd3a719b65e75f06b4b88694655cad4cd3b540e6a3af51"
        }
      }
    });

    const activeKey =
      "59d2aed2c8c5ac5f75bd3a719b65e75f06b4b88694655cad4cd3b540e6a3af51";
    const amount = 12;
    const from = "inita";
    const to = "initb";
    const memo = "test transfer";
    const ownerKey =
      "bf7eecb10bb7b588c413d2861548d85e45e52a2a966ffed5e0f64f0d71dadbac";

    const payload = {
      active_key: activeKey,
      amount,
      from,
      memo,
      owner_key: ownerKey,
      to
    };

    const response = {
      transaction_id:
        "bf7eecb10bb7b588c413d2861548d85e45e52a2a966ffed5e0f64f0d71dadbac",
      processed: {
        refBlockNum: 54215,
        refBlockPrefix: 3959318548,
        expiration: "2017-10-10T16:23:51",
        scope: ["inita", "initb"],
        signatures: [],
        messages: [
          {
            code: "eos",
            type: "transfer",
            authorization: [
              {
                account: "initb",
                permission: "active"
              }
            ],
            data: {
              from: "initb",
              to: "inita",
              amount: 100,
              memo: " "
            },
            hex_data: "000000000041934b000000008040934b64000000000000000120"
          }
        ],
        output: [
          {
            notify: [
              {
                name: "inita",
                output: {
                  notify: [],
                  deferred_transactions: []
                }
              },
              {
                name: "initb",
                output: {
                  notify: [],
                  deferred_transactions: []
                }
              }
            ],
            deferred_transactions: []
          }
        ]
      }
    };

    const expectedActions = [
      tryGetBalance({ account_name: "inita" }),
      succeedPostTransaction(response)
    ];

    fetch.mockResponse(JSON.stringify(response));

    await store.dispatch(doTransfer(payload));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
