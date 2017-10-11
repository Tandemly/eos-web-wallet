// @flow
import * as React from "react";
import cx from "classnames";

const NavbarLink = ({
  url = "#",
  children,
  className
}: {
  url?: string,
  children: React.Node,
  className?: string
}) => (
  <a className={cx("navbar-item", className)} href={url}>
    {children}
  </a>
);

export default NavbarLink;
