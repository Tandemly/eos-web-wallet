/* eslint-disable camelcase, consistent-return */
import { getTransactions } from "thunks/transactions";
import { getBalance } from "thunks/balance";

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
      store.dispatch(getBalance(account_name));
      store.dispatch(getTransactions(account_name));
    }
  }

  next(action);
};

export default refresh;
