import * as React from "react";
import { NavLink } from "react-router-dom";

const Shortcut = ({
  className = 'col-link px-4 py-3',
  iconClass,
  text,
  key,
  ...props }) => (
  <li key={key}>
    <NavLink
      className={className}
      exact
      {...props}
    >
      <span className={iconClass} />
      {text}
    </NavLink>
  </li>
);

export default Shortcut;