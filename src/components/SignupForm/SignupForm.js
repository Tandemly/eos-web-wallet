import * as React from "react";
import { reduxForm, Field } from "redux-form";
import renderField from "components/Field";
import Button from "components/Button";

// TODO show errors from server when unable to connect
// { message: 'EOS is down currently, please try again later' }
const SignupForm = ({ callAPI, handleSubmit, submitting, handleClose }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <Field
      aria-describedby="email"
      className="input"
      id="email"
      label="Email"
      name="email"
      required
      component={renderField}
      type="email"
    />

    <Field
      aria-describedby="password"
      className="input"
      id="password"
      label="Password (must be at least 8 characters)"
      name="password"
      required
      component={renderField}
      type="password"
    />

    <div className="modal-cta">
      <div className="field is-grouped">
        <div className="control">
          <Button
            disabled={submitting}
            className="button is-large is-primary"
            type="submit"
            text={submitting ? "Submitting..." : "Continue"}
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
    </div>
  </form>
);

export default reduxForm({
  form: "sign-up"
})(SignupForm);
