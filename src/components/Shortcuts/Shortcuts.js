import * as React from "react";
import List from "components/List";
import Shortcut from "./Shortcut";

const activeClassName = 'active';
const data = [
  {
    to: '/',
    text: 'Transfer',
    iconClass: 'icon-eos_icons_transfer mr-2',
    activeClassName,
  },
  {
    to: '/transactions',
    text: 'Transaction History',
    iconClass: 'icon-eos_icons_history mr-2',
    activeClassName,
  },
  {
    to: '/permissions',
    text: 'Permissions',
    iconClass: 'icon-eos_icons_permissions mr-2',
    activeClassName,
  },
  {
    to: '/logout',
    text: 'Logout',
    iconClass: 'icon-eos_icons_logout mr-2',
    activeClassName,
  },
];

const Shortcuts = ({ renderItem = Shortcut }) => (
  <List
    className="-links"
    data={data}
    renderItem={renderItem}
  />
);

export default Shortcuts;
