//@flow
import type { AccountBalance } from '../../types/AccountBalance';

export const TRY_GET_BALANCE = "TRY_GET_BALANCE";
export const SUCCESS_GET_BALANCE = "SUCCESS_GET_BALANCE";
export const FAIL_GET_BALANCE = "FAIL_GET_BALANCE";

type GetBalanceTryAction = {
  type: "TRY_GET_BALANCE",
  account: string
};

type GetBalanceSuccessAction = {
  type: "SUCCESS_GET_BALANCE",
  account: AccountBalance
};

type GetBalanceFailureAction = {
  type: "FAIL_GET_BALANCE",
  errors: any
};

export type BalanceActions =
  | GetBalanceTryAction
  | GetBalanceSuccessAction
  | GetBalanceFailureAction;

export const succeedGetBalance = (
  account: AccountBalance
): GetBalanceSuccessAction => ({
  type: SUCCESS_GET_BALANCE,
  account
});

export function failGetBalance(errors: any): GetBalanceFailureAction {
  return {
    type: FAIL_GET_BALANCE,
    errors
  };
}

export function tryGetBalance(account: string): GetBalanceTryAction {
  return {
    type: TRY_GET_BALANCE,
    account
  };
}
