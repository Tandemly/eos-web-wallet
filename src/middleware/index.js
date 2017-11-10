/* global window */
import thunk from "redux-thunk";
import logger from "redux-logger";
import api from "./api";
import refresh from "./refresh";

const middlewares = [thunk, refresh, api];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default middlewares;
