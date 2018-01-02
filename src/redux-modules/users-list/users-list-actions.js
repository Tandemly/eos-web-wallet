//@flow
export const SET_PAGED_EOS_USERS = "SET_PAGED_EOS_USERS";

type SetPagedEOSUsersAction = {
  type: "SET_PAGED_EOS_USERS",
  pagedUsers: Array<string>
};

export type UsersListActions =
  | SetPagedEOSUsersAction;

export const setPagedEOSUsers = (pagedUsers: Array<string>) => ({
  type: SET_PAGED_EOS_USERS,
  pagedUsers
});
