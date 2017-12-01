//@flow
import {
  tryPostLogin,
  succeedPostLogin,
  failPostLogin,
  logout
} from "redux-modules/user/user-actions";
import type { Dispatch } from "redux";
import { push } from "react-router-redux";
import { reset } from "redux-form";
import { appRequest } from "util/fetchUtil";
import type { Action } from "../redux-modules/action-types";
import {
  rehydrateAccounts,
  dehydrateAccounts
} from "../middleware/account-persist/account-persist-actions";

export const doLogin = (
  email: string,
  password: string
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>) => {
  dispatch(tryPostLogin(email, password));
  try {
    await appRequest("/app/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    dispatch(succeedPostLogin(email, password));
    dispatch(push("/"));
    setTimeout(()=>dispatch(rehydrateAccounts()), 2000);
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
