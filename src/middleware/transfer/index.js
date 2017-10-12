/* eslint-disable camelcase, consistent-return */
/* global fetch */
import {
  succeedPostTransaction,
  failPostTransaction } from '../../containers/TransferContainer/reducer';
import rejectBadResponse from '../../func/rejectBadResponse';

export const postTransfer = (payload, dispatch) => (
  fetch(`${process.env.REACT_APP_PROXY_ENDPOINT}/api/account/transfer`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then(rejectBadResponse)
    .then(response => response.json())
    .then(data => dispatch(succeedPostTransaction(data)))
    // TODO fixup chain of errors
    .catch(response => response.json())
    .then(error => error && dispatch(failPostTransaction({ error })))
    .catch(() => dispatch({
      type: 'CONNECTION_ERROR',
      form: 'sign-up',
      error: { message: 'Unable to connect to the Wallet' }
    }))
);

const transfer = store => next => (action) => {
  if (action.type === 'TRY_POST_TRANSACTION') {
    const {
      login: {
        user: {
          account_name: from,
          auth: {
            active_key,
            owner_key,
          }
        }
      }
    } = store.getState();

    const {
      amount,
      memo,
      to,
    } = action;

    // TODO sign transactions here via eosjs API
    if (process.env.NODE_ENV === 'test') {
      await postTransfer({
        active_key,
        amount,
        from,
        memo,
        owner_key,
        to,
      }, store.dispatch);
    } else {
      postTransfer({
        active_key,
        amount,
        from,
        memo,
        owner_key,
        to,
      }, store.dispatch);
    }
  }

  next(action);
};

export default transfer;
