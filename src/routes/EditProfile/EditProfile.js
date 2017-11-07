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

    <div className="columns is-desktop is-variable">
      <div className="column is-half-desktop">
        <h2>{displayName || "Display Name"}</h2>
        <Container />
      </div>
      <div className="column is-half-desktop">
        <div className="hidden-md-down col-lg-6">
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
    <div className="columns is-desktop is-variable">
      <div className="column is-half-desktop">
      </div>
    </div>
    <ResetPassword />
  </div>
);

export default EditProfile;
