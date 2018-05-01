import { reset } from "redux-form";
import {
  tryPostTransaction,
  succeedPostTransaction,
  failPostTransaction
} from "redux-modules/transfer/transfer-actions";
import { apiClient } from "../util/apiClient";
import {
  selectEOSAccountName,
  selectEOSPrivateKeys
} from "../redux-modules/eos-account/account-selectors";
import { setNotification } from "../redux-modules/notifications/notifications-actions";

export const doTransfer = (to, amount, memo) => async (dispatch, getState) => {
  apiClient.setKeyProvider(selectEOSPrivateKeys(getState()));

  const from = selectEOSAccountName(getState());

  const deciMilliEOS = amount * 10000;

  const txn = {
    account: from,
    // code: "eos",
    name: "transfer",
    recipients: [from, to],
    authorization: [{ actor: from, permission: "active" }],
    data: {
      from,
      to,
      quantity: `${deciMilliEOS} EOS`,
      memo
    }
  };

  const payload = {
    // scope: [from, to],
    actions: [txn]
  };

  dispatch(tryPostTransaction(to, amount, memo));
  try {
    const response = await apiClient.postTransaction(
      "/v1/transactions",
      payload
    );
    dispatch(succeedPostTransaction(response));
    dispatch(
      setNotification(
        `${amount} EOS successfully transferred to ${to}`,
        "success"
      )
    );
    dispatch(reset("transfer"));
  } catch (error) {
    if (typeof error === "string") {
      dispatch(failPostTransaction({ message: error }));
    } else {
      dispatch(failPostTransaction(error));
    }
  }
};
