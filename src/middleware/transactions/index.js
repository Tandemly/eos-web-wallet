/* eslint-disable camelcase, consistent-return */
/* global fetch */
import {
  succeedGetTransactions,
  failGetTransactions
} from "redux-modules/transactions/reducer";
import rejectBadResponse from "util/rejectBadResponse";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// NOTE it may take up to 3 seconds for a new transaction to process on the blockchain
export const getTransactions = (payload, dispatch) =>
  delay(1000)
    .then(() =>
      fetch(
        `${process.env.REACT_APP_PROXY_ENDPOINT}/api/account/transactions/`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: `Bearer `, //TODO: tore out the access token...needs to use the new utility
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      )
    )
    .then(rejectBadResponse)
    .then(response => response.json())
    .then(data => dispatch(succeedGetTransactions(data)))
    // TODO fixup chain of errors
    .catch(response => response.json())
    .then(error => error && dispatch(failGetTransactions({ error })))
    .catch(() =>
      dispatch({
        type: "CONNECTION_ERROR",
        form: "sign-up",
        error: { message: "Unable to connect to the Wallet" }
      })
    );

const transactions = store => next => action => {
  const { login: { isAuthenticated } } = store.getState();

  if (isAuthenticated && action.type === "TRY_GET_TRANSACTIONS") {
    const { account_name } = action;

    getTransactions({ account_name }, store.dispatch);
  }

  next(action);
};

export default transactions;
