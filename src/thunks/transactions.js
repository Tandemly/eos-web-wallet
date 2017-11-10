import {
  succeedGetTransactions,
  failGetTransactions
} from "redux-modules/transactions/actions";
import { apiRequest } from "../util/fetchUtil";
import { tryGetTransactions } from "../redux-modules/transactions/actions";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getTransactions = accountName => async dispatch => {
  // NOTE it may take up to 3 seconds for a new transaction to process on the blockchain
  await delay(1000);

  const payload = {
    account_name: accountName
  };
  dispatch(tryGetTransactions(payload));
  try {
    const response = await apiRequest("/api/account/transactions/", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    dispatch(succeedGetTransactions(response));
  } catch (error) {
    dispatch(failGetTransactions({ error }));
  }
};

