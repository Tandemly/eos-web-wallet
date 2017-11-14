//@flow
import type { UserProfile } from "types/UserProfile";

export const TRY_POST_LOGIN = "TRY_POST_LOGIN";
export const SUCCEED_POST_LOGIN = "SUCCEED_POST_LOGIN";
export const FAIL_POST_LOGIN = "FAIL_POST_LOGIN";
export const TRY_LOGOUT = "TRY_LOGOUT";

type LoginTryAction = {
  type: "TRY_POST_LOGIN",
  email: string,
  password: string
};

type LoginSuccessAction = {
  type: "SUCCEED_POST_LOGIN"
};

type LoginFailureType = {
  type: "FAIL_POST_LOGIN",
  error: any
};

type LogoutAction = {
  type: "TRY_LOGOUT"
};

export type LoginActions =
  | LoginTryAction
  | LoginSuccessAction
  | LoginFailureType;

export const tryPostLogin = (
  email: string,
  password: string
): LoginTryAction => ({
  type: TRY_POST_LOGIN,
  email,
  password
});

export const succeedPostLogin = (profile: UserProfile) => ({
  type: SUCCEED_POST_LOGIN,
  profile
});

export const failPostLogin = (error: string) => ({
  type: FAIL_POST_LOGIN,
  form: "login", // see: middleware/api
  error
});

export const logout = (): LogoutAction => ({
  type: TRY_LOGOUT
});
