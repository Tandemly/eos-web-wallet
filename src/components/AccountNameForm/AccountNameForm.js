import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/Field';

const AccountNameForm = ({ 
  callAPI,
  handleSubmit,
  submitting, }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <h3>Select an Account Name</h3>

    <Field
      aria-describedby="account_name"
      className="form-control form-control-lg prefix"
      id="account_name"
      label="Your account name is how you will be known on EOS."
      name="account_name"
      required
      component={renderField}
      type="text"
    />

    <div className="modal-cta">
      <div className="row col-12 no-gutters p-0">
        <div className="col-sm-auto col-12 pl-0 pr-sm-2 pr-0 mb-sm-0 mb-3">
          <button
            disabled={submitting}
            className="btn btn-primary btn-lg btn-block"
            type="submit"
          >
            {submitting ? 'Submitting...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'sign-up',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(AccountNameForm);

