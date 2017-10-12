import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import renderField from 'components/Field';

const LoginForm = ({
  callAPI,
  handleSubmit,
  handleClose,
  modal,
  submitting,
  accountName, }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <p className={`${!modal && 'd-none'}`}>This operation requires your Active Key or Master password.</p>
    
    <Field
      aria-describedby="account_name"
      className="form-control form-control-lg prefix"
      component={renderField}
      id="account_name"
      label="Account Name"
      name="account_name"
      required
      type="text"
      value={accountName}
    />

    <Field
      aria-describedby="owner_key"
      className="form-control form-control-lg"
      component={renderField}
      id="owner_key"
      label="Owner Key"
      name="owner_key"
      required
      type="password"
    />

    <fieldset className="form-check">
      <label htmlFor="keepLoggedIn">Keep me logged in</label>
      <Field
        name="keepLoggedIn"
        component="input"
        type="checkbox"
        className="ml-2"
      />
    </fieldset>

    <div className={`button-group ${modal && 'modal-cta'}`}>
      <div className="row col-12 no-gutters p-0">
        <div className={`col-12 pl-0 ${modal ? 'col-sm-auto pr-sm-2 mb-3' : 'pr-sm-0 mb-1'}`}>
          <button
            className={`btn btn-primary btn-block ${modal ? 'btn-lg' : 'btn-md'}`}
            disabled={submitting}
            type="submit"
          >
          Login
          </button>
        </div>
        <div className={`${modal ? 'col-sm-auto col-12 p2-2 pl-sm-2 pl-0 mb-3' : 'd-none'}`}>
          {modal &&
          <button
            className="btn btn-secondary btn-lg btn-block"
            onClick={handleClose}
          >
            Cancel
          </button>}
        </div>
        <div className={`col-12 ${modal ? 'text-left' : 'text-center'}`}>
          <Link to="/create-account" className="text-link">Don&#39;t have an account?</Link>
        </div>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'login',
})(LoginForm);
