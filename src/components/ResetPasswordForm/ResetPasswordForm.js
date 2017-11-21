import * as React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/Field";
import Button from "components/Button";

const Label = () => (
  <p>
    Current Password
    <a className="help">Recover Account</a>
  </p>
);

const ResetPasswordForm = ({ callAPI, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <div className="reset_password">
      <h3 className="title is-3">Reset Wallet Password</h3>
      <Field
        aria-describedby="currentPassword"
        className="input"
        id="currentPassword"
        label={<Label />}
        name="currentPassword"
        required
        component={renderField}
        type="text"
      />
      <div className="field">
        <div className="control">
          <Button
            disabled={submitting}
            className="is-large is-secondary"
            type="submit"
            text={submitting ? "Submitting..." : "generate Password"}
          />
        </div>
      </div>
      <Field
        aria-describedby="regeneratedPassword"
        className="input"
        id="regeneratedPassword"
        label="Re-Generated Password"
        name="regeneratedPassword"
        required
        component={renderField}
        type="text"
      />
      <div className="field u-mt6">
        <div className="control">
          <Button
            disabled={submitting}
            className="is-large is-primary"
            type="submit"
            text={submitting ? "Submitting..." : "Update Password"}
          />
        </div>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: "sign-up",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ResetPasswordForm);
