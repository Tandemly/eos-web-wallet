import {
  succeedGetTransactions,
  failGetTransactions
} from "redux-modules/transactions/actions";
import { apiRequest } from "../util/fetchUtil";
import { tryGetTransactions } from "../redux-modules/transactions/actions";

export const getTransactions = accountName => async dispatch => {
  dispatch(tryGetTransactions(accountName));
  try {
    const response = await apiRequest("/v1/transactions");
    dispatch(succeedGetTransactions(response));
  } catch (error) {
    dispatch(failGetTransactions(error));
  }
};
