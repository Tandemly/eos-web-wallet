// @flow
import * as React from "react";

const NavbarLogo = ({
  img,
  url,
  alt = ""
}: {
  img?: string,
  url?: string,
  alt?: string
}) => (
  <a className="navbar-item" href={url}>
    {img && <img src={img} alt={alt} width="112" height="28" />}
  </a>
);

export default NavbarLogo;
