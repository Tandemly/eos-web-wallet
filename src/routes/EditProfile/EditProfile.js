//@flow
import * as React from "react";
import { Helmet } from "react-helmet";
import Container from "components/PreferencesForm/index";
import Profile from "components/Profile/CurrentUserProfile";
import { AppNotifications as Notifications } from "../../components/Notification";
import type { UserProfile as UserProfileType } from "../../types/UserProfile";
//import ResetPassword from "../../components/ResetPasswordForm";

type Props = {
  userId: string,
  userProfile: UserProfileType
};

const EditProfile = ({ userId, userProfile }: Props) => (
  <div>
    <div className="columns is-desktop content is-variable is-6">
      <Helmet>
        <title>Edit Profile</title>
      </Helmet>
      <div className="column is-half-desktop">
        <Notifications />
        <article className="u-mb6">
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
          <div className="box">
            {userProfile &&
              userProfile.displayName && (
                <h3 className="title is-3">{userProfile.displayName}</h3>
              )}
            <Profile userId={userId} userProfile={userProfile} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EditProfile;
