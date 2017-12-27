//@flow
/* global fetch */
import {
  tryGetBalance,
  failGetBalance,
  succeedGetBalance
} from "../redux-modules/eos-balances/balance-actions";
import { apiRequest } from "../util/fetchUtil";
import type { Dispatch } from "redux";
import type { Action } from "../redux-modules/action-types";
import type { AccountBalance } from "../redux-modules/eos-balances/types";

export type AccountBalanceResponse = {
  name: string,
  eos_balance: number,
  staked_balance: number,
  unstaking_balance: number,
  createdAt: string
};

export const getBalance = (
  account: string
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>) => {
  dispatch(tryGetBalance());
  try {
    const response: AccountBalanceResponse = await apiRequest(`/v1/accounts/${account}`);
    const balance: AccountBalance = {
      account,
      total: response.eos_balance,
      staked: response.staked_balance,
      unstaked: response.unstaking_balance
    };
    dispatch(succeedGetBalance(balance));
  } catch (error) {
    dispatch(failGetBalance(error));
  }
};
