import { connect } from 'react-redux';
import ConnectedAccountsForm from "components/ConnectedAccountsForm";

/* eslint-disable camelcase */
const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI(values) {
    // values
    // account_name, active_key, owner_key

    // dispatch(tryPostEmail({
    //   history,
    //   ...values
    // }));
  },
});


const ConnectedAccounts = connect(
  null,
  mapDispatchToProps,
)(ConnectedAccountsForm);

export default ConnectedAccounts;
