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
    const { users, location, skip, limit } = this.props;
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
        <div className="columns is-vcentered">
          <div className="column is-narrow">
            {skip > 0 ? (
              <Link
                to={{
                  pathname: location.pathname,
                  search: stringify({
                    ...location.query,
                    skip: skip < limit ? 0 : skip - limit
                  })
                }}
              >
                <Button
                  className="button is-primary is-outlined"
                  text="Previous"
                />
              </Link>
            ) : (
              <Button
                disabled
                className="button is-primary is-outlined is-disabled"
                text="Previous"
              />
            )}
          </div>
          <div className="column"> </div>
          <div className="column is-narrow">
            <Link
              to={{
                pathname: location.pathname,
                search: stringify({ ...location.query, skip: skip + limit })
              }}
            >
              <Button className="button is-primary is-outlined" text="Next" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
