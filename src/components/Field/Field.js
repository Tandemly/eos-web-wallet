import * as React from "react";

const Field = ({ children, input, label, showErrors, type, meta: { touched, error }, ...props }) => (
  <div className={`field${error ? ' validation-error' : ''}`}>
    <label className="label" htmlFor={input.name}>{label}</label>

    <div className={input.prefixed ? 'icon' : ''} />
    <div className={`control${input.prefixed ? 'input-prefix' : ''}`}>
      <input
        {...input}
        {...props}
        type={type}
      />

      {showErrors && touched &&
        error &&
        <div className="error-message">
          {error}
        </div>}
    </div>

    {children}
  </div>
);

export default Field;
