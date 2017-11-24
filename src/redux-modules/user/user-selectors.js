import { createSelector } from "reselect";

const selectUserState = state => state.user || {};

export const selectWalletUserProfile = createSelector(
  selectUserState,
  user => user.profile || {}
);

export const selectWalletUserId = createSelector(
  selectWalletUserProfile,
  profile => profile.email
);

export const selectWalletUserAuthenticated = createSelector(
  selectUserState,
  user => user.isAuthenticated
);

export const selectWalletUserHash = createSelector(
  selectUserState,
  user => user.hash
);

export const selectWalletUserName = createSelector(
  selectWalletUserProfile,
  profile => profile.name
);

export const selectWalletUserImage = createSelector(
  selectWalletUserProfile,
  profile => profile.picture
);
