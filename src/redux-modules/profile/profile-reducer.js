import {
  TRY_UPDATE_PROFILE,
  SUCCEED_UPDATE_PROFILE,
  FAIL_UPDATE_PROFILE,
  TRY_GET_PROFILE,
  SUCCEED_GET_PROFILE,
  FAIL_GET_PROFILE,
  SET_USER_PROFILE,
  UPDATE_PROFILES
} from "./profile-actions";
import type { UserProfile } from "../../types/UserProfile";

type StateShape = {
  profile: ?UserProfile,
  profiles: Array<UserProfile>,
  isFetching: boolean
};

const initialState: StateShape = {
  profile: null,
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case UPDATE_PROFILES:
      return {
        ...state,
        profiles: action.profiles
      };
    default:
      return state;
  }
};
