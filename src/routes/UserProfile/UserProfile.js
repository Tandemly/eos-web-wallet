//@flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { CurrentEOSBalance } from "../../components/Balance";
import TransactionsList from "../../components/Transactions";
import Profile from "../../components/Profile";
import type { UserProfile as UserProfileType } from "../../types/UserProfile";

type Props = {
  userId: string,
  userProfile: UserProfileType,
  transactions: Array<any>,
  loadUser: () => mixed
};

class UserProfile extends Component<Props> {
  constructor(props: Props, context: any) {
    super(props, context);

    props.loadUser();
  }

  componentWillUpdate(nextProps: Props) {
    if (nextProps.userId && nextProps.userId !== this.props.userId) {
      nextProps.loadUser();
    }
  }

  render() {
    const { userProfile, userId, transactions } = this.props;
    return (
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
        <TransactionsList data={transactions} />
      </div>
    );
  }
}

export default UserProfile;
