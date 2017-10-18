import * as React from "react";
import Balance from "containers/Balance";
import Login from "containers/Login";
import Shortcuts from "components/Shortcuts";

const Menu = ({ isAuthenticated }) => (
  <div className="menu p-lg">
    {!isAuthenticated && <Login />}

    {isAuthenticated && <Balance />}

    <Shortcuts
      isAuthenticated={isAuthenticated}
    />
  </div>
);

export default Menu;