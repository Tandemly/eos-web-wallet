import * as React from "react";
import Container from "containers/Login";
import Notifications from "containers/Notifications";
import cx from "classnames";
import css from "./login.module.scss";

const Login = ({ handleClose }) => (
  <div className="login">
    <div className="login-header modal-header">
      <h2 className={cx("title is-6", css.title)}>Login to EOS</h2>

      <button
        className="js-modal-close"
        onClick={handleClose}
      >
        x
      </button>
    </div>
    <div className="modal-body">
      <Notifications />

      <Container />
    </div>
  </div>
);

export default Login;
