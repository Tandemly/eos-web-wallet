import * as React from "react";
import Container from "components/LoginForm/index";

const Login = ({ handleClose, test }) => (
  <div className={`login ${test}`}>
    <div className="login-header modal-header">
      <h3 className="title is-3">Login to your wallet</h3>

      <button className="js-modal-close" onClick={handleClose} />
    </div>
    <div className="modal-body">
      <Container modal handleClose={handleClose} />
    </div>
  </div>
);

export default Login;
