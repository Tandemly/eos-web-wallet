import React from 'react';
// import renderRoutes from '../func/renderRoutes';
import { Progress } from '../components';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
  CreateAccountContainer,
  EmailContainer,
  NotificationContainer,
  PhoneContainer,
  UsernameContainer } from '../containers';

const steps = {
  '/create-account': 1,
  '/create-account/email': 2,
  '/create-account/phone': 3,
  '/create-account/complete': 4
};

const CreateAccount = ({ handleModalClose, location /* , routes */ }) => {
  const step = Object.keys(steps).reduce((acc, path) => (path === location.pathname ? steps[path] : acc), 1);

  return (
    <div className="login">
      <div className="login-header modal-header">
        <h2>Create your EOS account</h2>
        <button
          className="js-modal-close"
          onClick={handleModalClose}
        />
      </div>

      <div className="modal-body">
        <NotificationContainer />

        <Progress step={step} />
        <Switch>
          <Route exact path="/create-account" component={UsernameContainer} title="" />
          <Route exact path="/create-account/email" component={EmailContainer} title="" />
          <Route exact path="/create-account/phone" component={PhoneContainer} title="" />
          <Route path="/create-account/complete" component={CreateAccountContainer} title="" />
        </Switch>

        {/* {renderRoutes(routes)} */}
      </div>
    </div>
  );
};

export default withRouter(CreateAccount);
