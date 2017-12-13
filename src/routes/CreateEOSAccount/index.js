import { connect } from "react-redux";
import CreateEOSAccount from "./CreateEOSAccount";
import { createEOSAccount } from "../../thunks/eos-account";

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ eosAccountName , isDeveloper}) => {
    return dispatch(createEOSAccount(eosAccountName, isDeveloper));
  }
});

const CreateEOSAccountRoute = connect(null, mapDispatchToProps)(
  CreateEOSAccount
);

export default CreateEOSAccountRoute;
