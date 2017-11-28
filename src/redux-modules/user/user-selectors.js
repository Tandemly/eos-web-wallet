import { createSelector } from "reselect";

const selectUserState = state => state.user || {};

export const selectWalletUserId = createSelector(
  selectUserState,
  user => user.email
);

export const selectWalletUserAuthenticated = createSelector(
  selectUserState,
  user => user.isAuthenticated
);

export const selectWalletUserHash = createSelector(
  selectUserState,
  user => user.hash
);
