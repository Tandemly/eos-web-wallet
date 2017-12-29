import { createSelector } from "reselect";
import { selectWalletUserId } from "../user/user-selectors";

export const defaultProfile = {
  imageUrl: "/images/user.png"
};

const selectProfileState = state => state.profile || {};

export const selectProfiles = createSelector(
  selectProfileState,
  profileState => profileState.profiles || []
);

export const selectProfileEmailMap = createSelector(selectProfiles, profiles =>
  profiles.reduce((profileMap, profile) => {
    profileMap[profile.email] = { ...defaultProfile, ...profile };
    return profileMap;
  }, {})
);

export const selectUserProfile = email =>
  createSelector(selectProfileEmailMap, profileMap => ({
    ...defaultProfile,
    ...profileMap[email]
  }));

export const selectCurrentUserProfile = createSelector(
  selectWalletUserId,
  selectProfileEmailMap,
  (email, profileMap) => ({ ...defaultProfile, ...profileMap[email] })
);

export const selectProfileForEOSAccountMap = createSelector(
  selectProfiles,
  profiles =>
    profiles.reduce((profileMap, profile) => {
      if (profile.eosAccount) {
        profileMap[profile.eosAccount] = { ...defaultProfile, ...profile };
      }
      return profileMap;
    }, {})
);

export const selectAccountProfile = eosAccount =>
  createSelector(selectProfileForEOSAccountMap, profileMap => ({
    ...defaultProfile,
    ...profileMap[eosAccount],
    eosAccount
  }));