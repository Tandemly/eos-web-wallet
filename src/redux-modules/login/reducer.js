// NOTE token goes into local storage, not stored in redux
import {
  FAIL_POST_LOGIN,
  SUCCEED_LOGOUT,
  SUCCEED_POST_LOGIN,
  TRY_POST_LOGIN
} from "./actions";
import type UserProfile from "../../types/UserProfile";

type StateShape = {
  user: UserProfile,
  isFetching: boolean,
  isAuthenticated: boolean
};

const initialState: StateShape = {
  user: {
    email: ""
  },
  isFetching: false,
  isAuthenticated: false
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FAIL_POST_LOGIN:
      return {
        ...state,
        user: {
          email: ""
        },
        isFetching: false,
        error: action.error
      };
    case SUCCEED_POST_LOGIN:
      return {
        ...state,
        user: action.user,
        isFetching: false,
        isAuthenticated: true
      };
    case SUCCEED_LOGOUT:
      return {
        ...state,
        user: action.user,
        isFetching: false,
        isAuthenticated: false
      };
    case TRY_POST_LOGIN:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}
