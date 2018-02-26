import { connect } from "react-redux";
import CreateEOSAccount from "./CreateEOSAccount";
import { createEOSAccount } from "../../thunks/eos-account";

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ eosAccountName, firstName, lastName, isDeveloper}) => {
    return dispatch(createEOSAccount(eosAccountName, firstName, lastName, isDeveloper));
  }
});

const CreateEOSAccountRoute = connect(null, mapDispatchToProps)(
  CreateEOSAccount
);

export default CreateEOSAccountRoute;
