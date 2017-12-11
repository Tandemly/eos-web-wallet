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
};

export const removeEOSAccount = () => async dispatch => {
  dispatch(disconnectEOSAccount());
  await dispatch(updateProfileWithEOSAccountIfNeeded());
};

export const createEOSAccount = (
  eosAccountName,
  isDeveloper
) => async dispatch => {
  dispatch(tryCreateEOSAccount());
  try {
    //TODO: This needs to actually call the create service after generating the necessary keys
    if (!eosAccountName.startsWith("init")) {
      throw new Error("Account could not be pretend created.");
    }

    return delay(100, resolve => {
      const ownerKey = ecc.randomKey();
      const activeKey = ecc.randomKey();
      dispatch(succeedCreateEOSAccount());
      dispatch(setEOSAccountName(eosAccountName));
      dispatch(
        setEOSOwnerKeys({
          publicKey: ecc.privateToPublic(ownerKey),
          privateKey: ownerKey
        })
      );
      dispatch(
        setEOSActiveKeys({
          publicKey: ecc.privateToPublic(activeKey),
          privateKey: activeKey
        })
      );
      dispatch(
        setNotification(
          `EOS Account "${
            eosAccountName
          }" created. Your keys should be copied and stored offline for security.`,
          "success"
        )
      );
      resolve(dispatch(push("/accounts")));
    });
  } catch (error) {
    return dispatch(failCreateEOSAccount(error));
  }
};
