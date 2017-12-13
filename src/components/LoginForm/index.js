import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { doLogin } from "../../thunks/login";

const mapDispatchToProps = (dispatch) => ({
  callAPI({ email, password }) {
    return dispatch(doLogin(email, password));
  }
});

const LoginContainer = connect(null, mapDispatchToProps)(LoginForm);

export default LoginContainer;
