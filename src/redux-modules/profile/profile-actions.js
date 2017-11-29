//@flow
import type { UserProfile } from "types/UserProfile";

export const TRY_UPDATE_PROFILE = "TRY_UPDATE_PROFILE";
export const SUCCEED_UPDATE_PROFILE = "SUCCEED_UPDATE_PROFILE";
export const FAIL_UPDATE_PROFILE = "FAIL_UPDATE_PROFILE";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

type UpdateProfileTryAction = {
  type: "TRY_UPDATE_PROFILE"
};

type UpdateProfileSuccessAction = {
  type: "SUCCEED_UPDATE_PROFILE"
};

type UpdateProfileFailureType = {
  type: "FAIL_UPDATE_PROFILE",
  form: "profile",
  error: any
};

type SetProfileAction = {
  type: "SET_USER_PROFILE",
  profile: UserProfile
};

export type UpdateProfileActions =
  | UpdateProfileTryAction
  | UpdateProfileSuccessAction
  | SetProfileAction
  | UpdateProfileFailureType;

export const tryUpdateProfile = (): UpdateProfileTryAction => ({
  type: TRY_UPDATE_PROFILE
});

export const succeedUpdateProfile = (): UpdateProfileSuccessAction => ({
  type: SUCCEED_UPDATE_PROFILE
});

export const setProfile = (profile: UserProfile): SetProfileAction => ({
  type: SET_USER_PROFILE,
  profile
});

export const failUpdateProfile = (error: string): UpdateProfileFailureType => ({
  type: FAIL_UPDATE_PROFILE,
  form: "profile", // see: middleware/api
  error
});
