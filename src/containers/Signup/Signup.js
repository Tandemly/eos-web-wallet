import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignupForm from "components/SignupForm";
import { doSignUp } from "thunks/signup";

const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI(values) {
    dispatch(doSignUp(values.email, values.password));
  }
});

const Signup = connect(null, mapDispatchToProps)(SignupForm);

export default withRouter(Signup);
