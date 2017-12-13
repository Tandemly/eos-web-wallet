import * as React from "react";
import { AppNotifications as Notifications } from "../../components/Notification";
import CreateEOSAccountForm from "../../components/CreateEOSAccountForm";

const CreateEOSAccount = ({ onSubmit, handleClose }) => (
  <div className="login">
    <div className="login-header modal-header">
      <h3 className="title is-3">Create an EOS Account</h3>

      <button className="js-modal-close" onClick={handleClose} />
    </div>
    <div className="modal-body">
      <Notifications />

      <CreateEOSAccountForm onSubmit={onSubmit} handleClose={handleClose} />
    </div>
  </div>
);

export default CreateEOSAccount;
