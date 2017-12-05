import { connect } from "react-redux";
import {
  selectEOSActiveKeys,
  selectEOSOwnerKeys
} from "../../redux-modules/eos-account/account-selectors";

const mapEOSAccountKeysToProps = state => ({
  activeKeys: selectEOSActiveKeys(state),
  ownerKeys: selectEOSOwnerKeys(state)
});

export default connect(mapEOSAccountKeysToProps);
