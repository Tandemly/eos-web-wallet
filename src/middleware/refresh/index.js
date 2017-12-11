import { getTransactions } from "thunks/transactions";
import { getBalance } from "thunks/balance";
import { LOGOUT } from "../../redux-modules/user/user-actions";
import {
  selectEOSAccountName,
  selectEOSAccountRehydrated
} from "../../redux-modules/eos-account/account-selectors";
import { selectWalletUserId } from "../../redux-modules/user/user-selectors";
import {
  SET_EOS_ACCOUNT_NAME,
  DISCONNECT_EOS_ACCOUNT
} from "../../redux-modules/eos-account/account-actions";
import { updateProfileWithEOSAccountIfNeeded } from "../../thunks/profile";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const interval = 5000;
let timer = undefined;

const poll = fn => {
  console.log("[polling] Starting polling");
  fn();
  timer = setInterval(fn, interval);
};

function refreshAccount(store, eosAccountName) {
  delay(1000).then(() => {
    store.dispatch(getBalance(eosAccountName));
    store.dispatch(getTransactions(eosAccountName));
  });
}

// Dispatches action after events
const refresh = store => next => action => {
  // Clean up when user logs out
  if ([LOGOUT, SET_EOS_ACCOUNT_NAME, DISCONNECT_EOS_ACCOUNT].some(type => action.type === type)) {
    if (timer) {
      console.log("[polling] Stopping polling");
      clearTimeout(timer);
    }
  }

  next(action);

  if (action.type === SET_EOS_ACCOUNT_NAME) {
    const account = selectEOSAccountName(store.getState());
    if (account) {
      poll(() => refreshAccount(store, account));
    }
  }

  if (
    action.type === "persist/REHYDRATE" &&
    action.key.endsWith("-account") &&
    selectEOSAccountRehydrated(store.getState())
  ) {
    const account = selectEOSAccountName(store.getState());
    const userId = selectWalletUserId(store.getState());
    if (userId) {
      store.dispatch(updateProfileWithEOSAccountIfNeeded());
    }

    if (account) {
      poll(() => refreshAccount(store, account));
    }
  }
};

export default refresh;
