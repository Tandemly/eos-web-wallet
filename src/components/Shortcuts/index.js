import React from 'react';
import { NavLink, List } from '../';

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

const ShortcutLink = ({
  className = 'col-link px-4 py-3',
  iconClass,
  text,
  ...props }) => (
  <NavLink
    className={className}
    exact
    {...props}
  >
    <span className={iconClass} />
    {text}
  </NavLink>
);

const Shortcuts = () => (
  <List
    className="-links"
    data={data}
    renderItem={ShortcutLink}
  />
);

export default Shortcuts;
