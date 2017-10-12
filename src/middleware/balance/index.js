/* eslint-disable camelcase, consistent-return */
/* global fetch */
import {
  succeedGetBalance,
  failGetBalance,
} from '../../containers/BalanceContainer/reducer';
import rejectBadResponse from '../../func/rejectBadResponse';

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// TODO abstract away network requests
export const getBalance = (payload, dispatch) => (
  fetch(`${process.env.REACT_APP_PROXY_ENDPOINT}/api/account/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(rejectBadResponse)
    .then(response => response.json())
    .then(data => dispatch(succeedGetBalance(data)))
    // TODO fixup chain of errors
    .catch(response => response.ok && response.json())
    .then(error => error && dispatch(failGetBalance({ error })))
    .catch(() => {
      dispatch({
        type: 'CONNECTION_ERROR',
        form: 'sign-up',
        error: { message: 'Unable to connect to the Wallet' }
      });
    })
);

const balance = store => next => (action) => {
  if (action.type === 'TRY_GET_BALANCE') {
    const { account_name } = action;

    getBalance({ account_name }, store.dispatch);
  }

  next(action);
};

export default balance;
