import { createSelector } from "reselect";
import {
  selectProfileForEOSAccountMap,
  defaultProfile
} from "../profile/profile-selectors";

const selectUsersListState = state => state.usersList || {};

export const selectSkipUsers = createSelector(
  selectUsersListState,
  usersListState => usersListState.skipUsers || 0
);

export const selectPageSize = createSelector(
  selectUsersListState,
  usersListState => usersListState.pageSize || 30
);

export const selectPagedEOSAccounts = createSelector(
  selectUsersListState,
  usersListState => usersListState.pagedUsers || []
);

export const selectPagedUsers = createSelector(
  selectPagedEOSAccounts,
  selectProfileForEOSAccountMap,
  (eosAccounts, profileMap) =>
    eosAccounts.map(eosAccount => {
      const userProfile = {
        ...defaultProfile,
        ...profileMap[eosAccount],
        eosAccount
      };

      return {
        key: `users-list-${eosAccount}`,
        userId: userProfile.email,
        profile: userProfile.email
          ? `/users/${userProfile.email}`
          : `/users/@${eosAccount}`,
        userProfile
      };
    })
);
