//@flow
import {
  tryPostSignup,
  failPostSignup
} from "redux-modules/user/signup-actions";
import { succeedPostLogin } from "redux-modules/user/user-actions";
import { appRequest } from "util/fetchUtil";
import type { Dispatch } from "redux";
import { push } from "react-router-redux";
import type { Action } from "../redux-modules/action-types";
import { rehydrateAccounts } from "../middleware/account-persist/account-persist-actions";

export const doSignUp = (
  email: string,
  password: string
) => /* prettier-ignore */ async (dispatch: Dispatch<Action>) => {
  dispatch(tryPostSignup(email, password));
  try {
    await appRequest("/app/register", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    dispatch(succeedPostLogin(email, password));
    dispatch(push("/"));
    dispatch(rehydrateAccounts());
  } catch (error) {
    dispatch(failPostSignup(error));
  }
};
