import * as React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/Field";
import Button from "components/Button";
import { url } from "redux-form-validators";

const PreferencesForm = ({ callAPI, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <Field
      aria-describedby="imageUrl"
      className="input"
      id="imageUrl"
      label="Picture URL"
      name="imageUrl"
      component={renderField}
      showErrors
      validate={[url({ allowBlank: true, msg: "Not a valid web address" })]}
      type="text"
    />
    <Field
      aria-describedby="displayName"
      className="input"
      id="displayName"
      label="Display Name"
      name="displayName"
      component={renderField}
      type="text"
    />
    <Field
      aria-describedby="about"
      className="input"
      id="about"
      label="About"
      name="about"
      maxLength={150}
      component={renderField}
      type="text"
    />
    <Field
      aria-describedby="location"
      className="input"
      id="location"
      label="Location"
      name="location"
      component={renderField}
      type="text"
    />
    <Field
      aria-describedby="website"
      className="input"
      id="website"
      label="Website"
      name="website"
      component={renderField}
      showErrors
      validate={[url({ allowBlank: true, msg: "Not a valid web address" })]}
      type="text"
    />
    <div className="field u-mt6">
      <div className="control">
        <Button
          disabled={submitting}
          className="is-large is-primary"
          type="submit"
          text={submitting ? "Submitting..." : "Update Information"}
        />
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: "profile",
})(PreferencesForm);
