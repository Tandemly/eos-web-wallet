import * as React from "react";
import { NavLink } from "react-router-dom";
import Shortcuts from "components/Shortcuts";
import css from "./styles.module.scss";

const Shortcut = (item, _key) => {
  if (Number.isInteger(_key)) {
    return (
      <li key={_key}>
        <Shortcuts data={item} />
      </li>
    );
  } else {
    const {
      iconClass,
      text,
      key,
      ...props } = item;

    return (
      <li key={key}>
        <NavLink
          exact
          {...props}
        >
          <span className={iconClass} />
          {text}
        </NavLink>
      </li>
    );
  }
}

export default Shortcut;
