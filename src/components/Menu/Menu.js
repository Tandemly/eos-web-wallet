import * as React from "react";

const Menu = () => (
  <aside className="menu p-lg">
    <div className="-is-logged-in">
      <div className="financials u-p3">
        <p className="title is-1 balance">2.34<span>B</span></p>
        <p className="subtitle is-6 full-balance">1,000,000.0080</p>
        <span className="tag is-primary change"><span className="icon-increase"></span>27,600</span>
      </div>
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