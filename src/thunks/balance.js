//@flow
/* global fetch */
import {
  tryGetBalance,
  failGetBalance,
  succeedGetBalance
} from "../redux-modules/balance/actions";
import { apiRequest } from "../util/fetchUtil";
import type { Dispatch } from "redux";
import type { Action } from "../redux-modules/action-types";
import type { AccountBalance } from "../types/AccountBalance";

type AccountBalanceResponse = {
  account: AccountBalance
};

export const getBalance = (
  accountName: string
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>) => {
  dispatch(tryGetBalance(accountName));
  try {
    const response: AccountBalanceResponse = await apiRequest("/api/account/", {
      method: "POST",
      body: JSON.stringify({ account_name: accountName })
    });
    dispatch(succeedGetBalance(response.account));
  } catch (error) {
    dispatch(failGetBalance(error));
  }
};
