import * as React from "react";
import { Helmet } from 'react-helmet';
import ResetPassword from 'containers/ResetPassword';
import ConnectedAccounts from 'components/ConnectedAccounts';

const Permissions = () => (
  <div>
    <Helmet>
      <title>Permissions</title>
    </Helmet>
    <div className="content">
      <div className="row">
        <div className="col-12">
          <h2>Permissions</h2>
        </div>
      </div>

      <section className="section">
        <h3></h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <ConnectedAccounts />
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Reset Password</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <ResetPassword />
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Permissions;
