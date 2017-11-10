//@flow
import { succeedPostLogin, failPostLogin } from "redux-modules/login/actions";
import type { Dispatch } from "redux";
import type { UserProfile } from "types/UserProfile";
import camelcaseObject from "camelcase-object";
import { push } from "react-router-redux";
import { tryPostLogin, logout } from "redux-modules/login/actions";
import { appRequest } from "util/fetchUtil";

export const doLogin = (email: string, password: string) => async (
  dispatch: Dispatch<*>
) => {
  dispatch(tryPostLogin(email, password));
  try {
    const response = await appRequest("/app/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const profile: UserProfile = (camelcaseObject(response): UserProfile);
    dispatch(succeedPostLogin(profile));
    dispatch(push("/"));
  } catch (error) {
    dispatch(failPostLogin(error));
  }
};

export const doLogout = () => (dispatch: Dispatch<*>) => {
  dispatch(logout());
  dispatch(push("/login"));
};
