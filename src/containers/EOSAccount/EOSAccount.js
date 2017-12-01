import { connect } from "react-redux";
import EOSAccount from "components/EOSAccount";
import {
  selectEOSAccountName,
  selectEOSActiveKeys,
  selectEOSOwnerKeys
} from "../../redux-modules/eos-account/account-selectors";
import { disconnectEOSAccount } from "../../redux-modules/eos-account/account-actions";
import { setNotification } from "../../redux-modules/notifications/notifications-actions";

const mapStateToProps = state => ({
  accountName: selectEOSAccountName(state),
  activeKeys: selectEOSActiveKeys(state),
  ownerKeys: selectEOSOwnerKeys(state)
});

const mapDispatchToProps = dispatch => ({
  onDisconnect: () => {
    dispatch(disconnectEOSAccount());
  },
  onCopy: keyname =>
    dispatch(setNotification(`${keyname} has been copied to your clipboard`))
});

const ConnectedEOSAccount = connect(mapStateToProps, mapDispatchToProps)(
  EOSAccount
);

export default ConnectedEOSAccount;
