import {
  succeedGetTransactions,
  failGetTransactions
} from "redux-modules/transactions/actions";
import { apiRequest } from "../util/fetchUtil";
import { tryGetTransactions } from "../redux-modules/transactions/actions";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getTransactions = accountName => async dispatch => {
  dispatch(tryGetTransactions(accountName));
  try {
    const response = await apiRequest("/api/account/transactions/", {
      method: "POST",
      body: JSON.stringify({ account_name: accountName })
    });
    dispatch(succeedGetTransactions(response));
  } catch (error) {
    dispatch(failGetTransactions(error));
  }
};
