/* global fetch */
import { failPostSignup } from 'containers/Signup/actions';
import { succeedPostLogin } from 'containers/Login/reducer';
import rejectBadResponse from 'util/rejectBadResponse';

export const postSignup = (payload, dispatch, history,) => (
  fetch(`${process.env.REACT_APP_PROXY_ENDPOINT}/api/signup/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(rejectBadResponse)
    .then(response => response.json())
    .then(res => dispatch(succeedPostLogin(res)))
    .then(() => history.push('/permissions'))
    // TODO fixup chain of errors
    .catch(response => response.json())
    .then(error => error && dispatch(failPostSignup({ error })))
    .catch(() => dispatch({
      type: 'CONNECTION_ERROR',
      form: 'sign-up',
      error: { message: 'Unable to connect to the Wallet' }
    }))
);

const createAccount = store => next => async (action) => {
  if (action.type === 'TRY_POST_SIGNUP') {
    const { history, type, ...payload } = action;

    if (process.env.NODE_ENV === 'test') {
      await postSignup(payload, store.dispatch, history);
    } else {
      postSignup(payload, store.dispatch, history);
    }
  }

  next(action);
};

export default createAccount;
