//@flow
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "containers/Preferences";
import Profile from "components/Profile/CurrentUserProfile";
//import ResetPassword from "containers/ResetPassword";

const EditProfile = () => (
  <div>
    <div className="columns is-desktop content is-variable is-6">
      <Helmet>
        <title>Edit Profile</title>
      </Helmet>
      <div className="column is-half-desktop">
        <article class="u-mb6">
          <h2 className="title is-2">Profile</h2>
          <Container />
        </article>
        {/*<article>*/}
        {/*<ResetPassword />*/}
        {/*</article>*/}
      </div>
      <div className="column is-half-desktop is-hidden-touch">
        <div className="col-lg-6">
          <h5 className="title is-5">Profile Preview</h5>

          <Profile />
        </div>
      </div>
    </div>
  </div>
);

export default EditProfile;
