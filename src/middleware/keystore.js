/* eslint-disable camelcase, consistent-return */
import { 
  succeedLogin,
  failLogin } from '../containers/LoginContainer/reducer';
import rejectBadResponse from '../func/rejectBadResponse';

export const getKeys = (payload, dispatch) => (
  /* TODO pull keys from localstorage */
);

const transactions = store => next => (action) => {
  if (action.type === 'TRY_POST_LOGIN') {
    const { account_name, owner_key } = action;

    getKeys({ account_name }, store.dispatch);
  }

  next(action);
};

export default transactions;
