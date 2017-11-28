//@flow
import {
  tryUpdateProfile,
  failUpdateProfile,
  succeedUpdateProfile,
  setProfile
} from "redux-modules/profile/profile-actions";
// import { appRequest } from "util/fetchUtil";
import type { Dispatch } from "redux";
import { reset } from "redux-form";
import type { UserProfile } from "types/UserProfile";
// import camelcaseObject from "camelcase-object";
// import snakecaseKeys from "snakecase-keys";
import type { Action } from "../redux-modules/action-types";

export const updateProfile = (
  profile: UserProfile
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>) => {
  dispatch(tryUpdateProfile());
  try {
    // const response = await appRequest("/app/user", {
    //   method: "POST",
    //   body: JSON.stringify(snakecaseKeys(profile))
    // });
    // const updated: UserProfile = (camelcaseObject(response): UserProfile);
    const updated: UserProfile = profile;
    dispatch(succeedUpdateProfile());
    dispatch(setProfile(updated));
    dispatch(reset("profile"));
  } catch (error) {
    dispatch(failUpdateProfile(error));
  }
};
