import * as React from "react";
import ResetPasswordForm from 'components/ResetPasswordForm';
import { Helmet } from 'react-helmet';
import Authenticated from './Authenticated';

const Permissions = () => (
  <div>
    <Helmet>
      <title>Permissions</title>
    </Helmet>
    <div className="container-full">
      <div className="row">
        <div className="col-12">
          <h2>Permissions</h2>
        </div>
      </div>



      <div className="section">
        <h3>Reset Password</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Permissions };

export default Authenticated(Permissions);
