import About from './About';
import CreateAccount from './CreateAccount';
import Faq from './Faq';
import Login from './Login';
import NoMatch from './NoMatch';
import Permissions from './Permissions';
import Preferences from './Preferences';
import Profile from './Profile';
import Transactions from './Transactions';
import Transfer from './Transfer';
import Users from './Users';

import Email from "containers/Email";
import Phone from "containers/Phone";
import AccountName from "containers/Username";


export default [
  {
    routes: [
      {
        path: '/login',
        component: Login,
        exact: true,
        title: '',
        isModal: true,
      },
      {
        path: '/create-account',
        component: CreateAccount,
        isModal: true,
        routes: [
          {
            path: '/create-account/email',
            component: Email,
            title: '',
          },
          {
            path: '/create-account/phone',
            component: Phone,
            title: '',
          },
          {
            path: '/create-account',
            component: AccountName,
            title: '',
          },
        ],
      },
      {
        path: '/about',
        component: About,
        title: '',
      },
      {
        path: '/faq',
        component: Faq,
        title: '',
      },
      {
        path: '/',
        component: Transfer,
        exact: true,
        title: '',
      },
      {
        path: '/transactions',
        component: Transactions,
        title: '',
      },
      {
        path: '/users',
        component: Users,
        title: '',
      },
      {
        path: '/user/:id',
        component: Profile,
        title: '',
      },
      {
        path: '/permissions',
        component: Permissions,
        title: '',
      },
      {
        path: '/preferences',
        component: Preferences,
        title: '',
      },
      {
        path: '*',
        component: NoMatch,
        title: '',
      },
    ],
  },
];
