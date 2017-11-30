//@flow
import type { UserProfile } from "types/UserProfile";

export const TRY_UPDATE_PROFILE = "TRY_UPDATE_PROFILE";
export const SUCCEED_UPDATE_PROFILE = "SUCCEED_UPDATE_PROFILE";
export const FAIL_UPDATE_PROFILE = "FAIL_UPDATE_PROFILE";
export const TRY_GET_PROFILE = "TRY_GET_PROFILE";
export const SUCCEED_GET_PROFILE = "SUCCEED_GET_PROFILE";
export const FAIL_GET_PROFILE = "FAIL_GET_PROFILE";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

type UpdateProfileTryAction = {
  type: "TRY_UPDATE_PROFILE"
};

type UpdateProfileSuccessAction = {
  type: "SUCCEED_UPDATE_PROFILE"
};

type UpdateProfileFailureAction = {
  type: "FAIL_UPDATE_PROFILE",
  form: "profile",
  error: any
};

type GetProfileTryAction = {
  type: "TRY_GET_PROFILE"
};

type GetProfileSuccessAction = {
  type: "SUCCEED_GET_PROFILE"
};

type GetProfileFailureAction = {
  type: "FAIL_GET_PROFILE",
  error: any
};

type SetProfileAction = {
  type: "SET_USER_PROFILE",
  profile: UserProfile
};

export type UpdateProfileActions =
  | UpdateProfileTryAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailureAction
  | SetProfileAction
  | GetProfileTryAction
  | GetProfileSuccessAction
  | GetProfileFailureAction;

export const tryUpdateProfile = (): UpdateProfileTryAction => ({
  type: TRY_UPDATE_PROFILE
});

export const succeedUpdateProfile = (): UpdateProfileSuccessAction => ({
  type: SUCCEED_UPDATE_PROFILE
});

export const failUpdateProfile = (
  error: string
): UpdateProfileFailureAction => ({
  type: FAIL_UPDATE_PROFILE,
  form: "profile", // see: middleware/api
  error
});

export const tryGetProfile = (): GetProfileTryAction => ({
  type: TRY_GET_PROFILE
});

export const succeedGetProfile = (): GetProfileSuccessAction => ({
  type: SUCCEED_GET_PROFILE
});

export const failGetProfile = (error: string): GetProfileFailureAction => ({
  type: FAIL_GET_PROFILE,
  error
});

export const setProfile = (profile: UserProfile): SetProfileAction => ({
  type: SET_USER_PROFILE,
  profile
});
