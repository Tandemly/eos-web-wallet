//@flow
import {
  tryUpdateProfile,
  failUpdateProfile,
  succeedUpdateProfile,
  tryGetProfile,
  failGetProfile,
  succeedGetProfile,
  setProfile
} from "redux-modules/profile/profile-actions";
import { appRequest } from "util/fetchUtil";
import type { Dispatch } from "redux";
import type { UserProfile } from "types/UserProfile";
import changeCaseKeys from "change-case-keys";
import type { Action } from "../redux-modules/action-types";
import { selectWalletUserId } from "../redux-modules/user/user-selectors";
import { selectEOSAccountName } from "../redux-modules/eos-account/account-selectors";
import { selectWalletUserProfile } from "../redux-modules/profile/profile-selectors";

export const updateProfile = (
  profile: UserProfile
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) => {
  dispatch(tryUpdateProfile());
  try {
    profile.email = selectWalletUserId(getState());
    const response = await appRequest("/app/profile", {
      method: "PUT",
      body: JSON.stringify(changeCaseKeys(profile, "underscored"))
    });
    const updated: UserProfile = (changeCaseKeys(response, "camelize"): UserProfile);
    dispatch(succeedUpdateProfile());
    dispatch(setProfile(updated));
  } catch (error) {
    dispatch(failUpdateProfile(error));
  }
};

export const getProfile = () => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) => {
  dispatch(tryGetProfile());
  try {
    const userId = selectWalletUserId(getState());
    const response = await appRequest(`/app/profile/${userId}`);
    const updated: UserProfile = (changeCaseKeys(response, "camelize"): UserProfile);
    dispatch(succeedGetProfile());
    dispatch(setProfile(updated));
  } catch (error) {
    dispatch(failGetProfile(error));
  }
};

export const updateProfileWithEOSAccountIfNeeded = () => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) => {
  await dispatch(getProfile());
  const eosAccount = selectEOSAccountName(getState());
  const profile = selectWalletUserProfile(getState());
  if(profile.eosAccount !== eosAccount) {
    await dispatch(updateProfile({...profile, eosAccount}));
  }
};
