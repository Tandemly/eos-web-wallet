//@flow
export const SET_SKIP_USERS = "SET_SKIP_USERS";
export const SET_PAGE_SIZE = "SET_PAGE_SIZE";
export const SET_PAGED_EOS_USERS = "SET_PAGED_EOS_USERS";

type SetSkipUsersAction = {
  type: "SET_SKIP_USERS",
  skipUsers: number
};

type SetPageSizeAction = {
  type: "SET_PAGE_SIZE",
  pageSize: number
};

type SetPagedEOSUsersAction = {
  type: "SET_PAGED_EOS_USERS",
  pagedUsers: Array<string>
};

export type UsersListActions =
  | SetSkipUsersAction
  | SetPageSizeAction
  | SetPagedEOSUsersAction;

export const skipUsers = (skipUsers: number): SetSkipUsersAction => ({
  type: SET_SKIP_USERS,
  skipUsers
});

export const setPageSize = (pageSize: number): SetPageSizeAction => ({
  type: SET_PAGE_SIZE,
  pageSize
});

export const setPagedEOSUsers = (pagedUsers: Array<string>) => ({
  type: SET_PAGED_EOS_USERS,
  pagedUsers
});
