//@flow
import { SET_PAGED_EOS_USERS } from "./users-list-actions";

type StateShape = {
  pagedUsers: ?Array<string>
};

const initialState: StateShape = {
  pagedUsers: []
};

export default (state: StateShape = initialState, action: any = {}) => {
  switch (action.type) {
    case SET_PAGED_EOS_USERS:
      return {
        ...state,
        pagedUsers: action.pagedUsers
      };
    default:
      return state;
  }
};
