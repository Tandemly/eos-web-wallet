import { connect } from "react-redux";
import ConnectedEOSAccountsForm from "components/ConnectedEOSAccountsForm";
import { connectEosAccount } from "../../thunks/connect-eos-accounts";

/* eslint-disable camelcase */
const mapDispatchToProps = dispatch => ({
  callAPI(values) {
    dispatch(
      connectEosAccount(
        values.account_name,
        values.owner_key,
        values.active_key
      )
    );
  }
});

const ConnectedEOSAccounts = connect(null, mapDispatchToProps)(
  ConnectedEOSAccountsForm
);

export default ConnectedEOSAccounts;
