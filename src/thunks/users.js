import { getTransactionsByUserId, getTransactions } from "./transactions";
import { getProfileByUserId } from "./profile";
import { selectUserProfile } from "../redux-modules/profile/profile-selectors";
import { getBalance } from "./balance";

export const refreshUser = userId => async (dispatch, getState) => {
  await dispatch(getProfileByUserId(userId));
  const profile = selectUserProfile(userId)(getState());
  dispatch(getBalance(profile.eosAccount));
  dispatch(getTransactionsByUserId(userId));
};

export const refreshAccount = eosAccount => async dispatch => {
  dispatch(getBalance(eosAccount));
  return dispatch(getTransactions(eosAccount));
};
