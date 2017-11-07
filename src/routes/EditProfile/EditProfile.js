//@flow
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "containers/Preferences";
import Profile from "containers/Profile";
import ResetPassword from "containers/ResetPassword";

type Props = {
  displayName?: string,
  currentLocation?: string,
  profileImageUrl?: string,
  status?: string
};

const EditProfile = ({
  displayName,
  currentLocation,
  profileImageUrl,
  status
}: Props) => (
  <div className="content">
    <Helmet>
      <title>Edit Profile</title>
    </Helmet>
    <h2 className="title is-2">Profile</h2>
    <div className="columns is-desktop is-variable">
      <div className="column is-half-desktop">
        <Container />
      </div>
      <div className="column is-half-desktop is-hidden-touch">
        <div className="col-lg-6">
          <h5>Profile Preview</h5>

          <Profile
            name={displayName}
            currentLocation={currentLocation}
            imageUrl={profileImageUrl}
            status={status}
          />
        </div>
      </div>
    </div>
    <ResetPassword />
  </div>
);

export default EditProfile;
