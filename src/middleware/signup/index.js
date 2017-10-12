/* eslint-disable camelcase, consistent-return */
/* global fetch */
import {
  succeedPostEmail,
  failPostEmail,
  succeedPostUsername,
  failPostUsername,
  succeedPostPhone,
  failPostPhone,
  failPostSignup } from '../../containers/CreateAccount/reducer';
import { succeedPostLogin } from '../../containers/LoginContainer/reducer';
import rejectBadResponse from '../../func/rejectBadResponse';

const createAccountFlow = {
  TRY_POST_USERNAME: {
    success: succeedPostUsername,
    fail: failPostUsername,
    to: '/create-account/email',
  },
  TRY_POST_EMAIL: {
    success: succeedPostEmail,
    fail: failPostEmail,
    to: '/create-account/phone',
  },
  TRY_POST_PHONE: {
    success: succeedPostPhone,
    fail: failPostPhone,
    to: '/create-account/complete',
  },
  TRY_POST_SIGNUP: {
    success: succeedPostLogin,
    fail: failPostSignup,
    to: '/permissions',
  },
};

export const postSignup = (payload, dispatch, history, flow) => (
  fetch(`${process.env.REACT_APP_PROXY_ENDPOINT}/api/signup/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(rejectBadResponse)
    .then(response => response.text())
    .then(text => (!text ? dispatch(flow.success(payload)) : JSON.parse(text)))
    .then(jsonResponse => jsonResponse && dispatch(flow.success(jsonResponse)))
    .then(() => history.push(flow.to))
    // TODO fixup chain of errors
    .catch(response => response.json())
    .then(error => error && dispatch(flow.fail({ error })))
    .catch(() => dispatch({
      type: 'CONNECTION_ERROR',
      form: 'sign-up',
      error: { message: 'Unable to connect to the Wallet' }
    }))
);

const createAccount = store => next => async (action) => {
  const triggerActions = [
    'TRY_POST_EMAIL',
    'TRY_POST_PHONE',
    'TRY_POST_USERNAME',
    'TRY_POST_SIGNUP',
  ];

  if (triggerActions.some(t => action.type === t)) {
    const { history, type, ...payload } = action;
    const flow = createAccountFlow[action.type];

    if (process.env.NODE_ENV === 'test') {
      await postSignup(payload, store.dispatch, history, flow);
    } else {
      postSignup(payload, store.dispatch, history, flow);
    }
  }

  next(action);
};

export default createAccount;
