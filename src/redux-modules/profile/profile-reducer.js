import {
  TRY_UPDATE_PROFILE,
  SUCCEED_UPDATE_PROFILE,
  FAIL_UPDATE_PROFILE,
  SET_USER_PROFILE
} from "./profile-actions";
import type { UserProfile } from "../../types/UserProfile";

type StateShape = {
  profile: ?UserProfile,
  isFetching: boolean
};

const initialState: StateShape = {
  profile: null,
  isFetching: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TRY_UPDATE_PROFILE:
      return {
        ...state,
        isFetching: true
      };
    case SUCCEED_UPDATE_PROFILE:
      return {
        ...state,
        isFetching: false
      };
    case FAIL_UPDATE_PROFILE:
      return {
        ...state,
        isFetching: false
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};
