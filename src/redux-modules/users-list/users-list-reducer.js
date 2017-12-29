//@flow
import { SET_SKIP_USERS, SET_PAGE_SIZE, SET_PAGED_EOS_USERS } from "./users-list-actions";

type StateShape = {
  skipUsers: ?number,
  pageSize: ?number,
  pagedUsers: ?Array<string>,
};

const initialState: StateShape = {
  skipUsers: 0,
  pageSize: 30,
  pagedUsers: []
};

export default (state: StateShape = initialState, action: any = {}) => {
  switch (action.type) {
    case SET_SKIP_USERS:
      return {
        ...state,
        skipUsers: action.skipUsers
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.pageSize
      };
    case SET_PAGED_EOS_USERS:
      return {
        ...state,
        pagedUsers: action.pagedUsers
      };
    default:
      return state;
  }
};
