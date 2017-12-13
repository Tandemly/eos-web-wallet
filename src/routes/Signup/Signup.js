import * as React from "react";
import { AppNotifications as Notifications } from "../../components/Notification";
import Container from "../../components/SignupForm";

const Signup = ({ children, handleClose }) => (
  <div className="login">
    <div className="login-header modal-header">
      <h3 className="title is-3">Create your Wallet account</h3>

      <button className="js-modal-close" onClick={handleClose}>
        x
      </button>
    </div>

    <div className="modal-body">
      <Notifications />

      <Container handleClose={handleClose} />
    </div>
  </div>
);

export default Signup;
