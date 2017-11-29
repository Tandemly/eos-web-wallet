import { createSelector } from "reselect";

const selectProfileState = state => state.profile || {};

export const selectWalletUserProfile = createSelector(
  selectProfileState,
  user => user.profile || {}
);
