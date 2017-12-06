import { connect } from "react-redux";
import Notification from "./Notification";
import { unsetNotification } from "../../redux-modules/notifications/notifications-actions";
import { selectNotificationsState } from "../../redux-modules/notifications/notifications-selectors";

const mapStateToProps = state => selectNotificationsState(state);

const mapDispatchToProps = dispatch => ({
  unsetNotification() {
    dispatch(unsetNotification());
  }
});

export const AppNotifications = connect(mapStateToProps, mapDispatchToProps)(
  Notification
);

export default Notification;
