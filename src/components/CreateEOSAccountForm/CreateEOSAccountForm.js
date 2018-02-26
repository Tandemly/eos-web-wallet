import * as React from "react";
import { reduxForm, Field } from "redux-form";
import renderField from "components/Field";
import Button from "components/Button";

const CreateEOSAccountForm = ({
  onSubmit,
  handleSubmit,
  handleClose,
  submitting
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <h4 className="title is-4">Select an Account Name</h4>
    <Field
      aria-describedby="eosAccountName"
      className="input"
      id="eosAccountName"
      label="Account Name"
      name="eosAccountName"
      required
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="firstName"
      className="input"
      id="firstName"
      label="First Name"
      name="firstName"
      required
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="lastName"
      className="input"
      id="lastName"
      label="Last Name"
      name="lastName"
      required
      component={renderField}
      type="text"
    />

    <div className="field">
      <div className="control">
        <label className="label checkbox">
          <Field
            name="isDeveloper"
            id="isDeveloper"
            component="input"
            type="checkbox"
          />{" "}
          I am a developer who would like tokens to test with.
        </label>
      </div>
    </div>
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
  form: "create-eos-account"
})(CreateEOSAccountForm);
