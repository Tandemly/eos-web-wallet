//@flow
import { succeedPostLogin, failPostLogin } from "redux-modules/login/actions";
import type { Dispatch } from "redux";
import type UserProfile from "types/UserProfile";
import camelcaseKeys from "camelcase-keys";
import { push } from "react-router-redux";
import { tryPostLogin, tryLogout } from "redux-modules/login/actions";
import { fetchMe } from "util/fetchUtil";

export const doLogin = ({ email, password }) => async (dispatch: Dispatch) => {
  dispatch(tryPostLogin({ email, password }));
  try {
    const response = await fetchMe(`/app/login`, {
      method: "POST",
      body: JSON.stringify({ email, password })
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
  dispatch(push("/"));
};
