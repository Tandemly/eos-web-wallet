import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import renderField from "components/Field";
import Button from "components/Button";
import { AppNotifications as Notifications } from "../Notification";

const LoginForm = ({
  callAPI,
  handleSubmit,
  handleClose,
  modal,
  submitting,
  email,
  className
}) => (
  <form onSubmit={handleSubmit(callAPI)} className={className}>
    <Notifications minimized={!modal} />

    <Field
      aria-describedby="email"
      className="input"
      component={renderField}
      id="email"
      label="Email"
      name="email"
      required
      type="text"
      value={email}
    />

    <Field
      aria-describedby="password"
      className="input"
      component={renderField}
      id="password"
      label="Password"
      name="password"
      required
      type="password"
    />

    <div className="modal-cta">
      <div className="field is-grouped">
        <div className="control login-button">
          <Button
            disabled={submitting}
            className="is-large is-primary"
            type="submit"
            text={submitting ? "Submitting..." : "Login"}
          />
        </div>
        <div className="control cancel-button">
          <Button
            className="button is-large is-secondary"
            onClick={handleClose}
            text="Cancel"
          />
        </div>
      </div>
      <div className={`col-12 ${modal ? "text-left" : "text-center"}`}>
        <Link to="/create-account" className="text-link">
          Don&#39;t have an account?
        </Link>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: "login"
})(LoginForm);
