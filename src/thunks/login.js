//@flow
import { succeedPostLogin, failPostLogin } from "redux-modules/login/actions";
import type { Dispatch } from "redux";
import type UserProfile from "types/UserProfile";
import camelcaseKeys from "camelcase-keys";
import { push } from "react-router-redux";
import { tryPostLogin, tryLogout } from "redux-modules/login/actions";
import { appRequest } from "util/fetchUtil";

export const doLogin = (email, password) => async (dispatch: Dispatch) => {
  const payload = { email, password };
  dispatch(tryPostLogin(payload));
  try {
    const response = await appRequest("/app/login", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const profile: UserProfile = (camelcaseKeys(response, {
      deep: true
    }): UserProfile);
    dispatch(succeedPostLogin({ profile }));
    dispatch(push("/"));
  } catch (error) {
    dispatch(failPostLogin({ error }));
  }
};

export const doLogout = () => (dispatch: Dispatch) => {
  dispatch(tryLogout());
  dispatch(push("/login"));
};
