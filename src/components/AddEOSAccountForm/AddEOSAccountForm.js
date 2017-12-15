import * as React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import renderField from "components/Field";
import Button from "components/Button";

const AddEOSAccountForm = ({ callAPI, handleSubmit, submitting, match }) => (
  <article>
    <form onSubmit={handleSubmit(callAPI)} autoComplete="off">
      <h3>Connect your EOS Account</h3>
      <div className="box double">
        <div className="columns is-desktop">
          <div className="column is-half-desktop">
            <Field
              aria-describedby="account_name"
              className="input"
              id="account_name"
              label="EOS Account Name"
              name="account_name"
              required
              component={renderField}
              type="text"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column">
            <Field
              aria-describedby="active_key"
              className="input"
              id="active_key"
              label="EOS Active Key"
              name="active_key"
              required
              component={renderField}
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="column">
            <Field
              aria-describedby="owner_key"
              className="input"
              id="owner_key"
              label="EOS Owner Key"
              name="owner_key"
              required
              component={renderField}
              type="text"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="field is-grouped u-mt4">
          <div className="control">
            <Button
              disabled={submitting}
              className="button is-large is-primary"
              type="submit"
              text={submitting ? "Submitting..." : "Add Account"}
            />
          </div>
          <div className="control">
            <p>
              Don’t have an account?{" "}
              <Link to="/accounts/create-eos">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  </article>
);

export default reduxForm({
  form: "connect-eos-account"
})(AddEOSAccountForm);
