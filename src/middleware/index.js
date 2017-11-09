/* global window */
import thunk from "redux-thunk";
import logger from "redux-logger";
import api from "./api";
import balance from "./balance";
import connectEOSAccount from "./connect-eos-account";
import refresh from "./refresh";
import signup from "./signup";
import transactions from "./transactions";
import transfer from "./transfer";

const middlewares = [
  thunk,
  connectEOSAccount,
  balance,
  signup,
  transactions,
  transfer,
  refresh,
  api
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default middlewares;
