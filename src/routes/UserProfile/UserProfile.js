//@flow
import * as React from "react";
import { Helmet } from "react-helmet";
import { CurrentEOSBalance } from "../../components/Balance";
import TransactionsList from "../../components/Transactions";
import Profile from "../../components/Profile";
import type { UserProfile as UserProfileType } from "../../types/UserProfile";

type Props = {
  userId: string,
  userProfile: UserProfileType
};

const UserProfile = ({ userId, userProfile }: Props) => (
  <div className="content">
    <Helmet>
      <title>Edit Profile</title>
    </Helmet>

    {userProfile &&
      userProfile.displayName && (
        <h2 className="title is-2">{userProfile.displayName}</h2>
      )}
    <div className="columns is-variable is-6">
      <div className="column">
        <Profile userId={userId} userProfile={userProfile} />
      </div>
      <div className="column is-narrow">
        <div className="box">
          <CurrentEOSBalance />
        </div>
      </div>
    </div>
    <h3 className="title is-3">Transaction History</h3>
    <TransactionsList />
  </div>
);

export default UserProfile;
