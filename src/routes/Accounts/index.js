import Accounts from "./Accounts";
import { selectEOSAccountName } from "../../redux-modules/eos-account/account-selectors";
import { connect } from "react-redux";
import { push } from "react-router-redux";

const mapStateToProps = state => ({
  eosAccountName: selectEOSAccountName(state)
});

const mapDispatchToProps = dispatch => ({
  onConnect: () => dispatch(push("/connect-eos-account")),
  onCreate: () => dispatch(push("/create-eos-account"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
