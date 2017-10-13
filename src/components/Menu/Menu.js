import * as React from "react";
import Balance from "containers/Balance";
import Shortcuts from "components/Shortcuts";

const Menu = () => (
  <aside className="menu p-lg">
    <Balance />

    <Shortcuts />
  </aside>
);

export default Menu;