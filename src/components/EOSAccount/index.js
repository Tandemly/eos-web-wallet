import EOSAccount from "./EOSAccount";
import { connect } from "react-redux";
import withEOSAccount from "../../containers/EOSAccount";
import { disconnectEOSAccount } from "../../redux-modules/eos-account/account-actions";
import { setNotification } from "../../redux-modules/notifications/notifications-actions";

const mapDispatchToProps = dispatch => ({
  onDisconnect: () => {
    dispatch(disconnectEOSAccount());
  },
  onCopy: keyname =>
    dispatch(setNotification(`${keyname} has been copied to your clipboard`))
});

const ConnectedEOSAccount = connect(undefined, mapDispatchToProps)(EOSAccount);

export default withEOSAccount(ConnectedEOSAccount);
