import * as React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { withRouter } from "react-router-dom";
import { CurrentEOSBalance } from "../Balance";
import Login from "components/LoginForm/index";
import Shortcuts from "components/Shortcuts";
import { doLogout } from "../../thunks/login";
import { closeMenu } from "../../redux-modules/app/app-actions";

const unauthLinks = ({ goTo }) => [
  {
    to: "/users",
    onClick: goTo,
    text: "Users"
  } //,
  // {
  //   to: "/about",
  //   onClick: goTo,
  //   text: "About"
  // },
  // {
  //   to: "/faq",
  //   onClick: goTo,
  //   text: "FAQ"
  // }
];
const authLinks = ({ onLogout, goTo }) => [
  [
    {
      to: "/transfer",
      onClick: goTo,
      text: "Transfer",
      iconClass: "icon-transfer u-mr1"
    },
    {
      to: "/transactions",
      onClick: goTo,
      text: "Transaction History",
      iconClass: "icon-history u-mr1"
    },
    {
      to: "/accounts",
      onClick: goTo,
      text: "Accounts",
      iconClass: "icon-account u-mr1"
    },
    {
      to: "/logout",
      onClick: onLogout,
      text: "Logout",
      iconClass: "icon-logout u-mr1"
    }
  ],
  ...unauthLinks({ goTo })
];

const Menu = props => {
  const { isAuthenticated } = props;
  return (
    <div className="menu p-lg">
      {!isAuthenticated && <Login className="aside-login" modal={false} />}

      {isAuthenticated && <CurrentEOSBalance />}

      <Shortcuts
        data={isAuthenticated ? authLinks(props) : unauthLinks(props)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(doLogout()),
  goTo: e => {
    dispatch(push(e.target.href));
    dispatch(closeMenu());
  }
});

export default withRouter(connect(undefined, mapDispatchToProps)(Menu));
