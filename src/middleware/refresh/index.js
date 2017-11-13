/* eslint-disable camelcase, consistent-return */
import { getTransactions } from "thunks/transactions";
import { getBalance } from "thunks/balance";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Dispatches action after events
const refresh = store => next => action => {
  const triggerActions = [
    "SUCCESS_POST_TRANSACTION",
    "SUCCEED_LOGIN",
    "SUCCESS_POST_EOS_ACCOUNT",
    "ROUTE_LOAD"
  ];

  if (
    triggerActions.some(t => action.type === t) &&
    store.getState().login.user
  ) {
    const {
      login: { isAuthenticated, user: { account_name } }
    } = store.getState();

    if (isAuthenticated && account_name) {
      // NOTE it may take up to 3 seconds for a new transaction to process on the blockchain
      delay(1000).then(() => {
        store.dispatch(getBalance(account_name));
        store.dispatch(getTransactions(account_name));
      });
    }
  }

  next(action);
};

export default refresh;
