import * as React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/Field";
import Button from "components/Button";

const numbersOnly = (value, previousValue) =>
  /^\d*\.?\d{0,4}$/.test(value) ? value : previousValue;

const Label = ({ updateAmount }) => (
  <p>
    Amount
    <a className="help" onClick={updateAmount}>
      Use Full Balance
    </a>
  </p>
);

const TransferForm = ({
  callAPI,
  handleSubmit,
  reset,
  submitting,
  updateAmount
}) => (
  <form onSubmit={handleSubmit(callAPI)}>
    <Field
      aria-describedby="to"
      className="input"
      id="to"
      label="To"
      name="to"
      required
      prefixed
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="amount"
      className="input"
      id="amount"
      label={<Label updateAmount={updateAmount} />}
      name="amount"
      normalize={numbersOnly}
      pattern="^\d*\.?\d{0,4}$"
      required
      component={renderField}
      type="text"
    />

    <Field
      aria-describedby="memo"
      className="input"
      id="memo"
      label="Memo"
      name="memo"
      component={renderField}
      type="text"
    />

    <div className="field is-grouped u-mt6">
      <div className="control">
        <Button
          disabled={submitting}
          className="is-large is-primary"
          type="submit"
          text={submitting ? "Submitting..." : "Submit"}
        />
      </div>
      <div className="control cancel-button">
        <Button
          className="button is-large is-secondary"
          onClick={reset}
          text="Cancel"
        />
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: "transfer"
})(TransferForm);
