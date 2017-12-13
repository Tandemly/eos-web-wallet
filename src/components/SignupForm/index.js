import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import { doSignUp } from "../../thunks/signup";

const mapDispatchToProps = (dispatch) => ({
  callAPI(values) {
    return dispatch(doSignUp(values.email, values.password));
  }
});

const Signup = connect(null, mapDispatchToProps)(SignupForm);

export default Signup;
