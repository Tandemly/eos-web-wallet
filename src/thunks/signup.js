//@flow
import { tryPostSignup, failPostSignup } from "redux-modules/signup/actions";
import { succeedPostLogin } from "redux-modules/login/actions";
import { appRequest } from "util/fetchUtil";
import type { Dispatch } from "redux";
import type { UserProfile } from "types/UserProfile";
import camelcaseObject from "camelcase-object";
import { push } from "react-router-redux";

export const doSignUp = (email: string, password: string) => async (
  dispatch: Dispatch<*>
) => {
  dispatch(tryPostSignup(email, password));
  try {
    const response = await appRequest("/app/register", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const profile: UserProfile = (camelcaseObject(response): UserProfile);
    dispatch(succeedPostLogin(profile));
    dispatch(push("/"));
  } catch (error) {
    dispatch(failPostSignup(error));
  }
};
