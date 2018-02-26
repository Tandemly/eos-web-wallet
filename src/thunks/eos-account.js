import {
  setEOSAccountName,
  setEOSOwnerKeys,
  setEOSActiveKeys,
  disconnectEOSAccount,
  tryCreateEOSAccount,
  succeedCreateEOSAccount,
  failCreateEOSAccount
} from "../redux-modules/eos-account/account-actions";
import ecc from "eosjs-ecc";
import { push } from "react-router-redux";
import type { KeyPair } from "../redux-modules/eos-account/types";
import { setNotification } from "../redux-modules/notifications/notifications-actions";
import { updateProfileWithEOSAccountIfNeeded } from "./profile";
import { apiClient } from "../util/apiClient";
import { selectWalletUserId } from "../redux-modules/user/user-selectors";

const delay = (ms, callback) =>
  new Promise(resolve => setTimeout(() => callback(resolve), ms));

export const addEOSAccount = (
  accountName,
  ownerKey,
  activeKey
) => async dispatch => {
  let ownerKeys: KeyPair;
  let activeKeys: KeyPair;

  try {
    activeKeys = {
      publicKey: ecc.privateToPublic(activeKey),
      privateKey: activeKey
    };
  } catch (error) {
    dispatch(setNotification("Invalid Active Key (Private)", "error"));
    return;
  }

  try {
    ownerKeys = {
      publicKey: ecc.privateToPublic(ownerKey),
      privateKey: ownerKey
    };
  } catch (error) {
    dispatch(setNotification("Invalid Owner Key (Private)", "error"));
    return;
  }

  dispatch(setEOSAccountName(accountName));
  dispatch(setEOSActiveKeys(activeKeys));
  dispatch(setEOSOwnerKeys(ownerKeys));
  await dispatch(updateProfileWithEOSAccountIfNeeded());
  dispatch(push("/accounts"));
};

export const removeEOSAccount = () => async dispatch => {
  dispatch(disconnectEOSAccount());
  await dispatch(updateProfileWithEOSAccountIfNeeded());
};

export const createEOSAccount = (
  eosAccountName,
  firstName,
  lastName,
  isDeveloper
) => async (dispatch, getState) => {
  dispatch(tryCreateEOSAccount());
  return delay(1, async resolve => {
    try {
      const ownerKeys = {
        privateKey: ecc.randomKey()
      };
      ownerKeys.publicKey = ecc.privateToPublic(ownerKeys.privateKey);
      const activeKeys = {
        privateKey: ecc.randomKey()
      };
      activeKeys.publicKey = ecc.privateToPublic(activeKeys.privateKey);

      const payload = {
        name: eosAccountName,
        first_name: firstName,
        last_name: lastName,
        email: selectWalletUserId(getState()),
        wants_tokens: isDeveloper,
        keys: {
          active: activeKeys.publicKey,
          owner: ownerKeys.publicKey
        }
      };
      await apiClient.post("/v1/accounts/faucet", payload);

      dispatch(succeedCreateEOSAccount());
      dispatch(setEOSAccountName(eosAccountName));
      dispatch(setEOSOwnerKeys(ownerKeys));
      dispatch(setEOSActiveKeys(activeKeys));
      dispatch(
        setNotification(
          `EOS Account "${eosAccountName}" created. Your keys should be copied and stored offline for security.`,
          "success"
        )
      );
      resolve(dispatch(push("/accounts")));
    } catch (error) {
      if (typeof error === "string") {
        dispatch(failCreateEOSAccount({ message: error }));
      } else {
        dispatch(failCreateEOSAccount(error));
      }
    }
  });
};
