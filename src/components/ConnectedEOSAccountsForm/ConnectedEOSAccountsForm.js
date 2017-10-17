import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/Field';
import Button from "components/Button";

const ConnectedEOSAccountsForm = ({ 
  callAPI,
  handleSubmit,
  submitting, }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <Button>Connect your EOS account</Button>

    <Field
      aria-describedby="account_name"
      className="input"
      id="account_name"
      label="EOS Account Name"
      name="account_name"
      required
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="active_key"
      className="input"
      id="active_key"
      label="EOS Active Key"
      name="active_key"
      required
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="owner_key"
      className="input"
      id="owner_key"
      label="EOS Owner Key"
      name="owner_key"
      required
      component={renderField}
      type="text"
    />

    <div className="field">
      <div className="control">
        <Button
          disabled={submitting}
          className="button is-large is-primary"
          type="submit"
          text={submitting ? 'Submitting...' : 'Continue'}
        />
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'connected-accounts',
})(ConnectedEOSAccountsForm);
