/* eslint-disable camelcase, consistent-return */
/* global fetch */
import {
  succeedPostTransaction} from "redux-modules/transfer/actions";
import { rejectBadResponse } from "util/fetchUtil";
import { failPostTransaction } from '../../redux-modules/transfer/actions';

export const postTransfer = (payload, accessToken, dispatch) =>
  fetch(`${process.env.REACT_APP_PROXY_ENDPOINT}/v1/transfer`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(rejectBadResponse)
    .then(response => response.json())
    .then(data => dispatch(succeedPostTransaction(data)))
    // TODO fixup chain of errors
    .catch(response => response.json())
    .then(error => error && dispatch(failPostTransaction({ error })));

const transfer = store => next => async action => {
  const { login: { isAuthenticated, user } } = store.getState();

  const {
    account_name: from = "",
    accessToken = "",

    active_key = "",
    owner_key = ""
  } =
    user || {};

  if (isAuthenticated && action.type === "TRY_POST_TRANSACTION") {
    const { amount, memo, to } = action;

    // TODO sign transactions here via eosjs API
    if (process.env.NODE_ENV === "test") {
      await postTransfer(
        {
          active_key,
          amount,
          from,
          memo,
          owner_key,
          to
        },
        accessToken,
        store.dispatch
      );
    } else {
      postTransfer(
        {
          active_key,
          amount,
          from,
          memo,
          owner_key,
          to
        },
        accessToken,
        store.dispatch
      );
    }
  }

  next(action);
};

export default transfer;
