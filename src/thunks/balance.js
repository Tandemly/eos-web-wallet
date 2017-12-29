//@flow
/* global fetch */
import {
  tryGetBalance,
  failGetBalance,
  succeedGetBalance,
  succeedGetBalances
} from "../redux-modules/eos-balances/balance-actions";
import { apiRequest } from "../util/fetchUtil";
import type { Dispatch } from "redux";
import type { Action } from "../redux-modules/action-types";
import type { AccountBalance } from "../redux-modules/eos-balances/types";
import { setPagedEOSUsers } from "../redux-modules/users-list/users-list-actions";

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

export const listEOSAccountBalances = (skip: number, limit: number) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    const response = await apiRequest(
      `/v1/accounts?skip=${skip}&limit=${limit}`
    );
    const balances: Array<AccountBalance> = response.map(balance => ({
      account: balance.name,
      total: balance.eos_balance,
      staked: balance.staked_balance,
      unstaked: balance.unstaking_balance
    }));
    dispatch(succeedGetBalances(balances));
    return dispatch(setPagedEOSUsers(balances.map(balance => balance.account)));
  } catch (error) {
    if (typeof error === "string") {
      dispatch(failGetBalance({ message: error }));
    } else {
      dispatch(failGetBalance(error));
    }
  }
};
