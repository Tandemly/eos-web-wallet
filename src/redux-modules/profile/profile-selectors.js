import { createSelector } from "reselect";
import { selectWalletUserId } from "../user/user-selectors";

const defaultProfile = {
  imageUrl: "/images/user.png"
};

const selectProfileState = state => state.profile || {};

export const selectProfiles = createSelector(
  selectProfileState,
  profileState => profileState.profiles || []
);

export const selectProfileEmailMap = createSelector(selectProfiles, profiles =>
  profiles.reduce((profileMap, profile) => {
    profileMap[profile.email] = { ...defaultProfile, profile };
    return profileMap;
  }, {})
);

export const selectCurrentUserProfile = createSelector(
  selectWalletUserId,
  selectProfileEmailMap,
  (email, profileMap) => ({ ...defaultProfile, ...profileMap[email] })
);

export const selectWalletUserProfile = createSelector(
  selectProfileState,
  selectCurrentUserProfile,
  (profileState, userProfile) => profileState.profile || userProfile
);

export const selectProfileForEOSAccountMap = createSelector(
  selectProfiles,
  profiles =>
    profiles.reduce((profileMap, profile) => {
      if (profile.eosAccount) {
        profileMap[profile.eosAccount] = profile;
      }
      return profileMap;
    }, {})
);
