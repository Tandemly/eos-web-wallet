import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';

const Email = ({ 
  callAPI,
  handleSubmit,
  submitting, }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <h3>Next enter your email</h3>

    <Field
      aria-describedby="email"
      className="form-control form-control-lg"
      id="email"
      label="Email"
      name="email"
      required
      component={renderField}
      type="email"
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
})(Email);

