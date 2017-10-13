import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/Field';

const AccountNameForm = ({ 
  callAPI,
  handleSubmit,
  submitting, }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <Field
      aria-describedby="account_name"
      className="input"
      id="account_name"
      label="Select Account Name"
      name="account_name"
      required
      component={renderField}
      type="text"
    />
    
    <div className="field u-mt4">
      <div className="control">
        <button
          disabled={submitting}
          className="button is-large is-primary"
          type="submit"
        >
          {submitting ? 'Submitting...' : 'Continue'}
        </button>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'sign-up',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(AccountNameForm);

