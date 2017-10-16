import * as React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import AccountName from "containers/AccountName";
import Email from "containers/Email";
import Notifications from "containers/Notifications";
import Phone from "containers/Phone";
import Signup from "containers/SignupFinal";
import Progress from "components/Progress";
import SignupFinal from 'components/Progress';

const steps = {
  '/signup': 1,
  '/signup/email': 2,
  '/signup/phone': 3,
  '/signup/complete': 4
};

const CreateAccount = ({ handleModalClose, location /* , routes */ }) => {
  const step = Object.keys(steps)
    .reduce((acc, path) => (path === location.pathname ? steps[path] : acc), 1);

  return (
    <div className="login">
      <div className="login-header modal-header">
        <h2>Create your Wallet account</h2>
        <button
          className="js-modal-close"
          onClick={handleModalClose}
        />
      </div>

      <div className="modal-body">
        <Notifications />

        <Progress step={step} />
        
        <Switch>
          <Route exact path="/signup" component={AccountName} title="" />
          <Route exact path="/signup/email" component={Email} title="" />
          <Route exact path="/signup/phone" component={Phone} title="" />
          <Route path="/signup/complete" component={SignupFinal} title="" />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(CreateAccount);
