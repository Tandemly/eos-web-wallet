import React, { Component } from "react";
import { Helmet } from "react-helmet";
import type { UserProfile as UserProfileType } from "../../types/UserProfile";
import Button from "components/Button";
import Container from "../../components/Users";
import { Link } from "react-router-dom";
import { stringify } from "querystring";
// import Filter from "../../components/Filter";

// TODO move fixture upstream
// import users from "fixtures/users";

type Props = {
  userId: string,
  userProfile: UserProfileType,
  transactions: Array<any>,
  loadUser: () => mixed
};

const Pagination = ({ users, location, skip, limit }) => (
  <div className="columns is-vcentered u-pt2">
    <div className="column is-narrow">
      <Link
        to={{
          pathname: location.pathname,
          search: stringify({
            ...location.query,
            skip: skip < limit ? 0 : skip - limit
          })
        }}
        disabled={skip <= 0}
        className="button is-primary is-medium is-outlined"
        type="button"
      >
        Previous
      </Link>
    </div>
    <div className="column is-hidden-mobile"> </div>
    <div className="column is-narrow">
      <Link
        to={
          users.length >= limit
            ? {
                pathname: location.pathname,
                search: stringify({
                  ...location.query,
                  skip: skip + limit
                })
              }
            : location
        }
        disabled={users.length < limit}
        className="button is-primary is-medium is-outlined"
        type="button"
      >
        Next
      </Link>
    </div>
  </div>
);

class Users extends Component<Props> {
  constructor(props: Props, context: any) {
    super(props, context);

    props.loadUsers();
  }

  componentWillUpdate(nextProps: Props) {
    if (
      nextProps.skip !== this.props.skip ||
      nextProps.limit !== this.props.limit
    ) {
      nextProps.loadUsers();
    }
  }

  render() {
    const { users } = this.props;
    return (
      <div className="content">
        <Helmet>
          <title>Users</title>
        </Helmet>

        <h2 className="title is-2">Users</h2>

        <div>
          {/*<Filter data={users}>*/}
          <Container data={users} />
          {/*</Filter>*/}
        </div>
        <Pagination {...this.props} />
      </div>
    );
  }
}

export default Users;
