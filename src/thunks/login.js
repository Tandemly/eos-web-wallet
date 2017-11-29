//@flow
import {
  tryPostLogin,
  succeedPostLogin,
  failPostLogin,
  logout
} from "redux-modules/user/user-actions";
import type { Dispatch } from "redux";
import type { UserProfile } from "types/UserProfile";
import camelcaseObject from "camelcase-object";
import { push } from "react-router-redux";
import { reset } from "redux-form";
import { appRequest } from "util/fetchUtil";
import type { Action } from "../redux-modules/action-types";
import {
  rehydrateAccounts,
  dehydrateAccounts
} from "../middleware/account-persist/account-persist-actions";
import { setProfile } from "../redux-modules/profile/profile-actions";

export const doLogin = (
  email: string,
  password: string
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>) => {
  dispatch(tryPostLogin(email, password));
  try {
    const response = await appRequest("/app/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const profile: UserProfile = (camelcaseObject(response): UserProfile);

    dispatch(succeedPostLogin(email, password));
    dispatch(push("/"));
    dispatch(rehydrateAccounts());
    dispatch(setProfile(profile));
  } catch (error) {
    dispatch(failPostLogin(error));
  }
};

export const doLogout = () => (dispatch: Dispatch<*>) => {
  dispatch(logout());
  dispatch(push("/users"));
  dispatch(reset("transfer"));
  dispatch(reset("profile"));
  dispatch(reset("connect-eos-account"));
  dispatch(dehydrateAccounts());
};
