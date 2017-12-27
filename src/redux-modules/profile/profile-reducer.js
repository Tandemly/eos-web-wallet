import {
  TRY_UPDATE_PROFILE,
  SUCCEED_UPDATE_PROFILE,
  FAIL_UPDATE_PROFILE,
  TRY_GET_PROFILE,
  SUCCEED_GET_PROFILE,
  FAIL_GET_PROFILE,
  UPDATE_PROFILES
} from "./profile-actions";
import type { UserProfile } from "../../types/UserProfile";

type StateShape = {
  profiles: Array<UserProfile>,
  isFetching: boolean
};

const initialState: StateShape = {
  profiles: [],
  isFetching: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TRY_UPDATE_PROFILE:
    case TRY_GET_PROFILE:
      return {
        ...state,
        isFetching: true
      };
    case SUCCEED_UPDATE_PROFILE:
    case SUCCEED_GET_PROFILE:
      return {
        ...state,
        isFetching: false
      };
    case FAIL_UPDATE_PROFILE:
    case FAIL_GET_PROFILE:
      return {
        ...state,
        isFetching: false
      };
    case UPDATE_PROFILES:
      return {
        ...state,
        profiles: [...state.profiles, ...action.profiles]
      };
    default:
      return state;
  }
};
