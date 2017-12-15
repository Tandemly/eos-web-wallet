import * as React from "react";
import { Helmet } from "react-helmet";
import AddEOSAccountForm from "components/AddEOSAccountForm";
import { AppNotifications as Notifications } from "../../components/Notification";
import { selectEOSAccountName } from "../../redux-modules/eos-account/account-selectors";
import { connect } from "react-redux";

const Accounts = () => (
  <div>
    <Helmet>
      <title>EOS Account</title>
    </Helmet>
    <div className="content">
      <Notifications />
      <h2 className="title is-2">Connect Accounts</h2>
      <AddEOSAccountForm />
    </div>
  </div>
);

const mapStateToProps = state => ({
  eosAccountName: selectEOSAccountName(state)
});

export default connect(mapStateToProps)(Accounts);
