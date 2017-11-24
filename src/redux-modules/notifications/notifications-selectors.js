import { createSelector } from "reselect";

const selectNotificationsState = state => state.notification || {};

export const selectNotification = createSelector(
  selectNotificationsState,
  notifications => notifications.notification
);