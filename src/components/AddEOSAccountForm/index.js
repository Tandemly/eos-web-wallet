import AddEOSAccountForm from "./AddEOSAccountForm";
import { connect } from "react-redux";
import { addEOSAccount } from "../../thunks/add-eos-account";

/* eslint-disable camelcase */
export const mapDispatchToProps = dispatch => ({
  callAPI(values) {
    return dispatch(
      addEOSAccount(values.account_name, values.owner_key, values.active_key)
    );
  }
});

const ConnectedAddEOSAccountForm = connect(null, mapDispatchToProps)(AddEOSAccountForm);

export default ConnectedAddEOSAccountForm;
