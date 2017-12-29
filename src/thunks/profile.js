//@flow
import {
  tryUpdateProfile,
  failUpdateProfile,
  succeedUpdateProfile,
  tryGetProfile,
  failGetProfile,
  succeedGetProfile
} from "redux-modules/profile/profile-actions";
import { appRequest } from "util/fetchUtil";
import type { Dispatch } from "redux";
import type { UserProfile } from "types/UserProfile";
import changeCaseKeys from "change-case-keys";
import type { Action } from "../redux-modules/action-types";
import { selectWalletUserId } from "../redux-modules/user/user-selectors";
import { selectEOSAccountName } from "../redux-modules/eos-account/account-selectors";
import { selectCurrentUserProfile } from "../redux-modules/profile/profile-selectors";
import { selectRecentTransactionAccounts } from "../redux-modules/transactions/transactions-selectors";
import { updateProfiles } from "../redux-modules/profile/profile-actions";
import { selectPagedEOSAccounts } from '../redux-modules/users-list/users-list-selectors';

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
    dispatch(updateProfiles([updated]));
  } catch (error) {
    dispatch(failUpdateProfile(error));
  }
};

export const getProfileByUserId = (
  userId: string
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) => {
  dispatch(tryGetProfile());
  try {
    const response = await appRequest(`/app/profile/${userId}`);
    const updated: UserProfile = (changeCaseKeys(response, "camelize"): UserProfile);
    dispatch(succeedGetProfile());
    dispatch(updateProfiles([updated]));
  } catch (error) {
    dispatch(failGetProfile(error));
  }
};

export const getProfile = () => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) =>
  dispatch(getProfileByUserId(selectWalletUserId(getState())));

export const updateProfileWithEOSAccountIfNeeded = () => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) => {
  await dispatch(getProfile());
  const eosAccount = selectEOSAccountName(getState());
  const profile = selectCurrentUserProfile(getState());
  if(profile.eosAccount !== eosAccount) {
    await dispatch(updateProfile({...profile, eosAccount}));
  }
};

export const updateProfilesForRecentTransactions = () => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) => {
  const eosAccounts = selectRecentTransactionAccounts(getState());
  if(eosAccounts && eosAccounts.length > 0) {
    try {
      const filter = encodeURIComponent(JSON.stringify({
        "eos_account": {
          "$in": eosAccounts
        }
      }));
      const response = await appRequest(`/app/profile?filter=${filter}`);
      const profiles: Array<UserProfile> = (changeCaseKeys(response, "camelize"): Array<UserProfile>);
      dispatch(updateProfiles(profiles));
    } catch (error) {
      dispatch(failGetProfile(error));
    }
  }
};

export const updateProfilesForUsersList = () => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState: () => mixed) => {
  const eosAccounts = selectPagedEOSAccounts(getState());
  if(eosAccounts && eosAccounts.length > 0) {
    try {
      const filter = encodeURIComponent(JSON.stringify({
        "eos_account": {
          "$in": eosAccounts
        }
      }));
      const response = await appRequest(`/app/profile?filter=${filter}`);
      const profiles: Array<UserProfile> = (changeCaseKeys(response, "camelize"): Array<UserProfile>);
      dispatch(updateProfiles(profiles));
    } catch (error) {
      dispatch(failGetProfile(error));
    }
  }
};
