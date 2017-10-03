import * as React from "react";
import cx from "classnames";
import css from "./styles.module.scss";

const NavbarMenuToggle = ({
  toggled = false,
  onToggle,
  classNames
}: {
  toggled?: boolean,
  onToggle: Function,
  classNames?: string
}) => (
  <div
    className={cx(css.navbar_toggle, "navbar-burger", { "is-active": toggled })}
    onClick={() => onToggle()}
  >
    <span />
    <span />
    <span />
  </div>
);

export default NavbarMenuToggle;
