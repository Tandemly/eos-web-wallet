import changeCaseKeys from "change-case-keys";
import {
  succeedGetTransactions,
  failGetTransactions
} from "redux-modules/transactions/transactions-actions";
import { updateProfilesForRecentTransactions } from "thunks/profile";
import { apiRequest } from "../util/fetchUtil";
import { tryGetTransactions } from "../redux-modules/transactions/transactions-actions";
import { selectUserProfile } from "../redux-modules/profile/profile-selectors";

export const getTransactions = accountName => async (dispatch, getState) => {
  dispatch(tryGetTransactions(accountName));
  try {
    const response = await apiRequest(
      `/v1/transactions?sort=-createdAt&limit=50&skip=0&filter={"scope": { "$in": ["${
        accountName
      }"] }}`
    );
    const transactions = response ? changeCaseKeys(response, "camelize") : [];
    dispatch(succeedGetTransactions(transactions, accountName));
    dispatch(updateProfilesForRecentTransactions());
  } catch (error) {
    dispatch(failGetTransactions(error));
  }
};

export const getTransactionsByUserId = userId => async (dispatch, getState) =>
  dispatch(getTransactions(selectUserProfile(userId)(getState()).eosAccount));
