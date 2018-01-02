import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cx from "classnames";
import { CurrentEOSBalance } from "../Balance";
import Login from "components/LoginForm/index";
import Shortcuts from "components/Shortcuts";
import { doLogout } from "../../thunks/login";
import { closeMenu } from "../../redux-modules/app/app-actions";
import styles from "./styles.module.scss";
import withTransactions from "../../containers/transactions";

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
const authLinks = ({ transactions, onLogout, goTo }) => {
  const menuItems = [
    [
      {
        to: "/transfer",
        onClick: goTo,
        text: "Transfer",
        iconClass: "icon-transfer u-mr1"
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
  if (transactions.length > 0) {
    menuItems[0].splice(1, 0, {
      to: "/transactions",
      onClick: goTo,
      text: "Transaction History",
      iconClass: "icon-history u-mr1"
    });
  }
  return menuItems;
};

const Menu = props => {
  const { isAuthenticated } = props;
  return (
    <div className={cx("menu p-lg", styles.menu)}>
      {!isAuthenticated && <Login className="aside-login" modal={false} />}
      {isAuthenticated && (
        <div className={cx("u-p3", styles.financials)}>
          <CurrentEOSBalance />
        </div>
      )}

      <Shortcuts
        data={isAuthenticated ? authLinks(props) : unauthLinks(props)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(doLogout()),
  goTo: () => {
    dispatch(closeMenu());
  }
});

export default withRouter(
  withTransactions(connect(undefined, mapDispatchToProps)(Menu))
);
