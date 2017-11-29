import { FAIL_LOGIN, LOGOUT, SUCCEED_LOGIN, TRY_LOGIN } from "./user-actions";
import md5 from "nano-md5";

type StateShape = {
  email: ?string,
  hash: ?string,
  isFetching: boolean,
  isAuthenticated: boolean
};

const initialState: StateShape = {
  email: null,
  hash: null,
  isFetching: false,
  isAuthenticated: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FAIL_LOGIN:
      return {
        ...state,
        email: null,
        hash: null,
        isFetching: false,
        error: action.error
      };
    case SUCCEED_LOGIN:
      return {
        ...state,
        email: action.email,
        hash: md5(action.password),
        isFetching: false,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        ...state,
        email: null,
        hash: null,
        isFetching: false,
        isAuthenticated: false
      };
    case TRY_LOGIN:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};
