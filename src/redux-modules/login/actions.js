//@flow
export const FAIL_POST_LOGIN = "FAIL_POST_LOGIN";
export const SUCCEED_POST_LOGIN = "SUCCEED_POST_LOGIN";
export const TRY_POST_LOGIN = "TRY_POST_LOGIN";
export const TRY_LOGOUT = "TRY_LOGOUT";

export const failPostLogin = ({ error }) => ({
  type: FAIL_POST_LOGIN,
  form: "login", // see: middleware/api
  error
});

export const succeedPostLogin = ({ profile }) => ({
  type: SUCCEED_POST_LOGIN,
  profile
});

export const tryPostLogin = ({ email, password }) => ({
  type: TRY_POST_LOGIN,
  email,
  password
});

export function tryLogout() {
  return {
    type: TRY_LOGOUT
  };
}
