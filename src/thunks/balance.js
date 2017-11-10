/* global fetch */
import {
  tryGetBalance,
  failGetBalance,
  succeedGetBalance
} from "../redux-modules/balance/actions";
import { apiRequest } from "../util/fetchUtil";

export const getBalance = accountName => async dispatch => {
  const payload = { account_name: accountName }; // eslint-disable-line camelcase
  dispatch(tryGetBalance(payload));
  try {
    const response = await apiRequest("/api/account/", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    console.error(response);
    dispatch(succeedGetBalance(response));
  } catch (error) {
    dispatch(failGetBalance({ error }));
  }
};
