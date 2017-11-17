import { createSelector } from "reselect";

const selectLoginState = state => state.login || {};

export const selectWalletUserId = createSelector(
  selectLoginState,
  login => (login.user ? login.user.email : undefined)
);

export const selectWalletUserAuthenticated = createSelector(
  selectLoginState,
  login => login.isAuthenticated
);
