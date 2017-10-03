// @flow
import * as React from "react";
import cx from "classnames";
import css from "./styles.module.scss";
import { Toggle } from "../../util/component-utils";
import NavbarMenuToggle from "./NavbarMenuToggle";

console.log("styles:", css);
const { Component } = React;
const noop = () => void 0;

type PropTypes = {
  /** turn on transparency for the navbar so page background comes through */
  transparent?: boolean,
  /** optional classnames to append to the main container <nav> element */
  classNames?: string,
  /** optional list of components for left-side of navbar */
  renderLeftMenu?: () => React.Node,
  /** optional list of components for left-side of navbar */
  renderRightMenu?: () => React.Node,
  /** logo component/element to render on left-side of navbar */
  renderLogo?: () => React.Node
};

/**
 * Global navigation bar for all pages
 * 
 * @class Navbar
 * @extends {Component}
 */
const Navbar = ({
  transparent,
  classNames,
  renderLeftMenu = noop,
  renderRightMenu = noop,
  renderLogo = noop
}: PropTypes) => {
  const styles = {};
  const classes = {
    main: cx(css.navbar, "navbar", "is-transparent", classNames),
    burger: "button navbar-burger",
    menu: cx("navbar-menu")
  };

  if (transparent) {
    styles.nav = { ...styles.nav, background: "transparent" };
    styles.burger = {
      ...styles.burger,
      background: "transparent",
      borderColor: "transparent"
    };
  }

  return (
    <Toggle initialToggle={false}>
      {({ toggled, onToggle }) => (
        <nav
          className={classes.main}
          aria-label="main navigation"
          style={styles.nav}
        >
          <div className="navbar-brand">
            {renderLogo()}
            <NavbarMenuToggle toggled={toggled} onToggle={onToggle} />
          </div>
          <div className={cx(classes.menu, { "is-active": toggled })}>
            <div className="navbar-start">{renderLeftMenu()}</div>
            <div className="navbar-end">{renderRightMenu()}</div>
          </div>
        </nav>
      )}
    </Toggle>
  );
};

export default Navbar;
