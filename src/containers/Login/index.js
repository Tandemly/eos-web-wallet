import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginForm from "components/LoginForm";
import { doLogin } from "thunks/login";

const mapDispatchToProps = (dispatch, { history }) => ({
  callAPI({ email, password }) {
    return dispatch(doLogin(email, password));
  }
});

const LoginContainer = connect(null, mapDispatchToProps)(LoginForm);

export default withRouter(LoginContainer);
