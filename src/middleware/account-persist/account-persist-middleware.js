import { createReducer as createAccountReducer } from "redux-modules/eos-account";
import { removeReducers, addReducers } from "../../util/configureStore";
import {
  REHYDRATE_ACCOUNTS,
  DEHYDRATE_ACCOUNTS
} from "./account-persist-actions";
import {
  selectWalletUserId,
  selectWalletUserHash
} from "../../redux-modules/user/user-selectors";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const persist = store => next => action => {
  // Rehydrate accounts by adding a reducer capable using the user hash
  if (action.type === REHYDRATE_ACCOUNTS) {
    addReducers([
      {
        name: "eosAccount",
        reducer: createAccountReducer(
          selectWalletUserId(store.getState()),
          selectWalletUserHash(store.getState())
        )
      }
    ]);
    return;
  }

  if (action.type === DEHYDRATE_ACCOUNTS) {
    delay(1000).then(() => {
      removeReducers(["eosAccount"]);
    });
    return;
  }

  next(action);
};

export default persist;
