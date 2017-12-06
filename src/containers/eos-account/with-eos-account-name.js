import { connect } from "react-redux";
import { selectEOSAccountName } from "../../redux-modules/eos-account/account-selectors";

const mapEOSAccountNameToProps = state => ({
  accountName: selectEOSAccountName(state)
});

export default connect(mapEOSAccountNameToProps);
