import { createSelector } from "reselect";

const selectAccountState = state =>
  state && state.eosAccount ? state.eosAccount : {};


export const selectEOSAccountName = createSelector(
  selectAccountState,
  account => account.accountName
);

export const selectEOSOwnerKeys = createSelector(
  selectAccountState,
  account => account.ownerKeys
);

export const selectEOSActiveKeys = createSelector(
  selectAccountState,
  account => account.activeKeys
);

export const selectEOSPrivateKeys = createSelector(
  selectEOSActiveKeys,
  selectEOSOwnerKeys,
  (activeKeys, ownerKeys) => [activeKeys.privateKey, ownerKeys.privateKey]
);

export const selectEOSAccountRehydrated = createSelector(
  selectAccountState,
  account => (account._persist ? account._persist.rehydrated : false)
);
