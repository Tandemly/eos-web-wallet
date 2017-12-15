import Accounts from "./Accounts";
import { selectEOSAccountName } from "../../redux-modules/eos-account/account-selectors";
import { connect } from "react-redux";
import { push } from "react-router-redux";

const mapStateToProps = state => ({
  eosAccountName: selectEOSAccountName(state)
});

const mapDispatchToProps = (dispatch, stateProps) => ({
  onConnect: () => dispatch(push(`${stateProps.match.url}/connect-eos`)),
  onCreate: () => dispatch(push(`${stateProps.match.url}/create-eos`))
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
