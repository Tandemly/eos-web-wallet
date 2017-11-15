import { connect } from "react-redux";
import randomize from "randomatic";
import EOSAccount from "components/EOSAccount";
import {
  selectEOSAccountName,
  selectEOSActiveKeys,
  selectEOSOwnerKeys
} from "../../redux-modules/eos-account/selectors";
import {
  disconnectEOSAccount,
  setEOSAccountName,
  setEOSActiveKeys,
  setEOSOwnerKeys
} from "../../redux-modules/eos-account/account-actions";

const mapStateToProps = state => ({
  accountName: selectEOSAccountName(state),
  activeKeys: selectEOSActiveKeys(state),
  ownerKeys: selectEOSOwnerKeys(state)
});

const mapDispatchToProps = dispatch => ({
  onDisconnect: () => dispatch(disconnectEOSAccount()),
  fakeIt: () => {
    dispatch(
      setEOSAccountName(randomize("?", 16, { chars: "michaelkimberlin" }))
    );
    dispatch(
      setEOSActiveKeys({
        publicKey: randomize("A0", 64),
        privateKey: randomize("A0", 64)
      })
    );
    dispatch(
      setEOSOwnerKeys({
        publicKey: randomize("A0", 64),
        privateKey: randomize("A0", 64)
      })
    );
  }
});

const ConnectedEOSAccount = connect(mapStateToProps, mapDispatchToProps)(
  EOSAccount
);

export default ConnectedEOSAccount;
