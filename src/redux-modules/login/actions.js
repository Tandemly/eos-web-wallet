//@flow
import type { UserProfile } from "types/UserProfile";

export const FAIL_POST_LOGIN = "FAIL_POST_LOGIN";
export const SUCCEED_POST_LOGIN = "SUCCEED_POST_LOGIN";
export const TRY_POST_LOGIN = "TRY_POST_LOGIN";
export const TRY_LOGOUT = "TRY_LOGOUT";

export const failPostLogin = (error: string) => ({
  type: FAIL_POST_LOGIN,
  form: "login", // see: middleware/api
  error
});

export const succeedPostLogin = (profile: UserProfile) => ({
  type: SUCCEED_POST_LOGIN,
  profile
});

export const tryPostLogin = (email: string, password: string) => ({
  type: TRY_POST_LOGIN,
  email,
  password
});

export function logout() {
  return {
    type: TRY_LOGOUT
  };
}
