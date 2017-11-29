//@flow
import {
  tryUpdateProfile,
  failUpdateProfile,
  succeedUpdateProfile,
  setProfile
} from "redux-modules/profile/profile-actions";
import { appRequest } from "util/fetchUtil";
import type { Dispatch } from "redux";
import type { UserProfile } from "types/UserProfile";
import camelcaseObject from "camelcase-object";
import snakecaseKeys from "snakecase-keys";
import type { Action } from "../redux-modules/action-types";
import { selectWalletUserId } from "../redux-modules/user/user-selectors";

export const updateProfile = (
  profile: UserProfile
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>, getState) => {
  dispatch(tryUpdateProfile());
  try {
    profile.email = selectWalletUserId(getState());
    const response = await appRequest("/app/profile", {
      method: "PUT",
      body: JSON.stringify(snakecaseKeys(profile))
    });
    const updated: UserProfile = (camelcaseObject(response): UserProfile);
    // const updated: UserProfile = profile;
    dispatch(succeedUpdateProfile());
    dispatch(setProfile(updated));
  } catch (error) {
    dispatch(failUpdateProfile(error));
  }
};
