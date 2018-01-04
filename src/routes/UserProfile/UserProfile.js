//@flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { UserEOSBalance } from "../../components/Balance";
import TransactionsList from "../../components/Transactions";
import Profile from "../../components/Profile";
import type { UserProfile as UserProfileType } from "../../types/UserProfile";

type Props = {
  userId: string,
  userProfile: UserProfileType,
  transactions: Array<any>,
  match: {
    params: {
      userId: string
    }
  },
  loadUser: () => mixed
};

class UserProfile extends Component<Props> {
  constructor(props: Props, context: any) {
    super(props, context);

    props.loadUser();
  }

  componentWillUpdate(nextProps: Props) {
    const newUser = nextProps.match.params.userId;
    const oldUser = this.props.match.params.userId;
    if (newUser && newUser !== oldUser) {
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
        <div className="columns is-variable is-6 is-desktop">
          <div className="column">
            <Profile userId={userId} userProfile={userProfile} />
          </div>
          <div className="column is-narrow">
            <div className="box">
              <UserEOSBalance account={userProfile.eosAccount} />
            </div>
          </div>
        </div>
        {transactions &&
          transactions.length > 0 && (
            <div>
              <h3 className="title is-3">Transaction History</h3>
              <TransactionsList data={transactions} />
            </div>
          )}
      </div>
    );
  }
}

export default UserProfile;
