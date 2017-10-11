import * as React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';

const numbersOnly = (value, previousValue) => (
  /^\d*\.?\d*?$/.test(value) ? value : previousValue
);

const TransferForm = ({
  callAPI,
  handleSubmit,
  reset,
  submitting,
  updateAmount }) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <Field
      aria-describedby="to"
      className="form-control form-control-lg prefix"
      component={renderField}
      id="to"
      label="To"
      name="to"
      type="text"
    />

    <Field
      aria-describedby="amount"
      className="form-control form-control-lg"
      component={renderField}
      id="amount"
      label="Amount"
      name="amount"
      normalize={numbersOnly}
      pattern="^[0-9.]*$"
      required
      type="text"
    >
      {/* TODO review this feature, this should require verification */}
      <div>
        <small className="form-text text-muted">
          <a onClick={updateAmount}>Use Full Balance</a>
        </small>
      </div>
    </Field>


    <Field
      aria-describedby="memo"
      className="form-control form-control-lg"
      component={renderField}
      id="memo"
      label="Memo"
      name="memo"
      type="text"
    />

    <div className="row col-12 no-gutters p-0">
      <div className="col-sm-auto col-6 pl-0 pr-2">
        <button
          className="btn btn-primary btn-lg btn-block px-0 px-sm-5"
          type="submit"
          disabled={submitting}
        >{submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      <div className="col-sm-auto col-6 pl-2 pr-0">
        <button
          className="btn btn-secondary btn-lg btn-block px-0 px-sm-5"
          onClick={reset}
          type="button"
        >Clear
        </button>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'transfer',
})(TransferForm);
