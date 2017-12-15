import changeCaseKeys from "change-case-keys";
import {
  succeedGetTransactions,
  failGetTransactions
} from "redux-modules/transactions/transactions-actions";
import { updateProfilesForRecentTransactions } from "thunks/profile";
import { selectEOSAccountName } from "redux-modules/eos-account/account-selectors";
import { apiRequest } from "../util/fetchUtil";
import { tryGetTransactions } from "../redux-modules/transactions/transactions-actions";

export const getTransactions = accountName => async (dispatch, getState) => {
  const account = selectEOSAccountName(getState());
  dispatch(tryGetTransactions(accountName));
  try {
    const response = await apiRequest(
      `/v1/transactions?sort=-createdAt&limit=50&skip=0&filter={"scope": { "$in": ["${
        account
      }"] }}`
    );
    const transactions = response ? changeCaseKeys(response, "camelize") : [];
    dispatch(succeedGetTransactions(transactions));
    dispatch(updateProfilesForRecentTransactions());
  } catch (error) {
    dispatch(failGetTransactions(error));
  }
};
