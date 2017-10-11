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
import {
  EmailContainer,
  PhoneContainer,
  UsernameContainer } from '../containers/CreateAccount';

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
            component: EmailContainer,
            title: '',
          },
          {
            path: '/create-account/phone',
            component: PhoneContainer,
            title: '',
          },
          {
            path: '/create-account',
            component: UsernameContainer,
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
