import * as React from "react";
import Balance from "containers/Balance";

const Menu = () => (
  <aside className="menu p-lg">
    <div className="-is-logged-in">
      <Balance />

      <ul className="menu-list">
        <li>
          <a href="/" className="is-active"><span className="icon-transfer u-mr1"></span>Transfer</a>
        </li>
        <li>
          <a href="/transactions"><span className="icon-history u-mr1"></span>Transaction History</a>
        </li>
        <li>
          <a href="/permissions"><span className="icon-permissions u-mr1"></span>Permission</a>
        </li>
        <li>
          <a href="/"><span className="icon-logout u-mr1"></span>Logout</a>
        </li>
      </ul>
    </div>
    <ul className="menu-list">
      <li>
        <a href="/users">Users</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/faq">FAQ</a>
      </li>
    </ul>
  </aside>
);

export default Menu;