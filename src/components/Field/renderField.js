import * as React from "react";

const renderField = ({ children, input, label, showErrors, type, meta: { touched, error }, ...props }) => (
  <fieldset className={`form-group${error ? ' validation-error' : ''}`}>
    <label htmlFor={input.name}>{label}</label>

    <div className="input-container">
      <div className={input.prefixed ? 'icon' : ''} />
      <div className={input.prefixed ? 'input-prefix' : ''}>
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
    </div>

    {children}
  </fieldset>
);

export default renderField;
