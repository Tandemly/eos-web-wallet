import * as React from "react";
import Container from "containers/Login";
import Notifications from "containers/Notifications";

const Login = ({ handleModalClose }) => (
  <div className="login">
    <div className="login-header modal-header">
      <h2>Login to EOS</h2>
      <button
        className="js-modal-close"
        onClick={handleModalClose}
      >
        x
      </button>
    </div>
    <div className="modal-body">
      <Notifications />

      <Container kindModal />
    </div>
  </div>
);

export default Login;
