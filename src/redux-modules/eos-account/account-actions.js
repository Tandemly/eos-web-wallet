//@flow
import type { KeyPair } from "./types";

export const SET_EOS_ACCOUNT_NAME = "SET_EOS_ACCOUNT_NAME";
export const SET_EOS_OWNER_KEYS = "SET_EOS_OWNER_KEYS";
export const SET_EOS_ACTIVE_KEYS = "SET_EOS_ACTIVE_KEYS";
export const DISCONNECT_EOS_ACCOUNT = "DISCONNECT_EOS_ACCOUNT";
export const TRY_CREATE_EOS_ACCOUNT = "TRY_CREATE_EOS_ACCOUNT";
export const SUCCESS_CREATE_EOS_ACCOUNT = "SUCCESS_CREATE_EOS_ACCOUNT";
export const FAIL_CREATE_EOS_ACCOUNT = "FAIL_CREATE_EOS_ACCOUNT";

type CreateEOSAccountTryAction = {
  type: "TRY_CREATE_EOS_ACCOUNT"
};

type CreateEOSAccountSuccessAction = {
  type: "SUCCESS_CREATE_EOS_ACCOUNT"
};

type CreateEOSAccountFailureAction = {
  type: "FAIL_CREATE_EOS_ACCOUNT",
  form: "create-eos-account",
  error: any
};

type SetEOSAccountName = {
  type: "SET_EOS_ACCOUNT_NAME",
  accountName: string
};

type SetEOSOwnerKeys = {
  type: "SET_EOS_OWNER_KEYS",
  keys: KeyPair
};

type SetEOSActiveKeys = {
  type: "SET_EOS_ACTIVE_KEYS",
  keys: KeyPair
};

type DisconnectEOSAccount = {
  type: "DISCONNECT_EOS_ACCOUNT"
};

export type AccountActions =
  | CreateEOSAccountTryAction
  | CreateEOSAccountSuccessAction
  | CreateEOSAccountFailureAction
  | SetEOSAccountName
  | SetEOSOwnerKeys
  | SetEOSActiveKeys
  | DisconnectEOSAccount;

export const tryCreateEOSAccount = (): CreateEOSAccountTryAction => ({
  type: TRY_CREATE_EOS_ACCOUNT
});

export const succeedCreateEOSAccount = (): CreateEOSAccountSuccessAction => ({
  type: SUCCESS_CREATE_EOS_ACCOUNT
});

export const failCreateEOSAccount = (
  error: any
): CreateEOSAccountFailureAction => ({
  type: FAIL_CREATE_EOS_ACCOUNT,
  form: "create-eos-account",
  error
});

export const setEOSAccountName = (accountName: string): SetEOSAccountName => ({
  type: SET_EOS_ACCOUNT_NAME,
  accountName
});

export const setEOSOwnerKeys = (keys: KeyPair): SetEOSOwnerKeys => ({
  type: SET_EOS_OWNER_KEYS,
  keys
});

export const setEOSActiveKeys = (keys: KeyPair): SetEOSActiveKeys => ({
  type: SET_EOS_ACTIVE_KEYS,
  keys
});

export const disconnectEOSAccount = (): DisconnectEOSAccount => ({
  type: DISCONNECT_EOS_ACCOUNT
});
