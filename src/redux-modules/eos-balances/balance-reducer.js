//@flow
import {
  FAIL_GET_BALANCE,
  SUCCESS_GET_BALANCE,
  TRY_GET_BALANCE
} from "./balance-actions";
import find from "lodash/find";
import indexOf from "lodash/indexOf";
import type { BalanceState } from "./types";
import type { Action } from "../action-types";

export const initialState: BalanceState = {
  loading: false,
  balances: []
};

const upsertArray = (arr, value, match) => {
  const newArr = arr.slice();
  if (match) {
    const index = indexOf(arr, match);
    newArr.splice(index, 1, value);
  } else {
    newArr.push(value);
  }
  return newArr;
};

export default (state: BalanceState = initialState, action: Action) => {
  switch (action.type) {
    case TRY_GET_BALANCE:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_GET_BALANCE:
      const match = find(state.balances, { account: action.balance.account });
      let balances = state.balances;
      if (!match || (match && action.balance.total !== match.total)) {
        const newBalance = {
          ...action.balance,
          difference: match
            ? action.balance.total - match.total
            : action.balance.total
        };
        balances = upsertArray(balances, newBalance, match);
      }

      return { ...state, balances, loading: false };
    case FAIL_GET_BALANCE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
