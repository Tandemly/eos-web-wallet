import { connect } from "react-redux";
import AddEOSAccountForm from "components/AddEOSAccountForm";
import { addEOSAccount } from "../../thunks/add-eos-account";

/* eslint-disable camelcase */
const mapDispatchToProps = dispatch => ({
  callAPI(values) {
    return dispatch(
      addEOSAccount(
        values.account_name,
        values.owner_key,
        values.active_key
      )
    );
  }
});

const AddEOSAccount = connect(null, mapDispatchToProps)(
  AddEOSAccountForm
);

export default AddEOSAccount;
