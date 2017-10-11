import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validation
// import mutation

const ResetPassword = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <fieldset className="form-group">
      <label htmlFor="accountName">Account Name</label>
      <Field
        aria-describedby="accountName"
        className="form-control form-control-lg"
        name="accountName"
        required
        component="input"
        type="text"
      />
    </fieldset>

    <fieldset className="form-group">
      <small className="form-text text-muted"><a>Recover Account</a></small>
      <label htmlFor="currentPassword">Current password</label>
      <Field
        aria-describedby="currentPassword"
        className="form-control form-control-lg"
        name="newPassword"
        required
        component="input"
        type="password"
      />
    </fieldset>

    <div className="row col-12 no-gutters p-0 mb-3">
      <div className="col-sm-auto col-12 pl-0 pr-0">
        <button
          className="btn btn-secondary btn-lg btn-block"
          type="submit"
        >Regenerate Password
        </button>
      </div>
    </div>

    <fieldset className="form-group">
      <label htmlFor="regeneratedPassword">Re-Generated password</label>
      <Field
        aria-describedby="regeneratedPassword"
        className="form-control form-control-lg"
        name="regeneratedPassword"
        required
        component="input"
        type="password"
      />
    </fieldset>

    <div className="row col-12 no-gutters p-0">
      <div className="col-sm-auto col-12 pl-0 pr-0">
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit"
        >Update Password
        </button>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'resetPassword',
})(ResetPassword);
