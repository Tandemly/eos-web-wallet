import { createSelector } from "reselect";
import { selectEOSAccountName } from "../eos-account/account-selectors";

const defaultBalance = {
  total: 0,
  difference: 0
};

const selectBalanceState = state =>
  state && state.eosBalances ? state.eosBalances : {};

export const selectAllBalances = createSelector(
  selectBalanceState,
  balanceState => balanceState.balances || []
);

export const selectEOSBalancesByAccount = createSelector(
  selectAllBalances,
  balances =>
    balances.reduce((balanceMap, balance) => {
      balanceMap[balance.account] = balance;
      return balanceMap;
    }, {})
);

const accountBalanceOrDefault = (eosAccountName, balancesByAccount) =>
  balancesByAccount[eosAccountName] || {
    ...defaultBalance,
    account: eosAccountName
  };

export const selectEOSBalanceForAccount = eosAccountName =>
  createSelector(selectEOSBalancesByAccount, balancesByAccount =>
    accountBalanceOrDefault(eosAccountName, balancesByAccount)
  );

export const selectEOSAccountBalance = createSelector(
  selectEOSAccountName,
  selectEOSBalancesByAccount,
  accountBalanceOrDefault
);
