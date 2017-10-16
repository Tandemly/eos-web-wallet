import * as React from "react";
import { Helmet } from 'react-helmet';
import Container from "containers/Users";

// TODO add search filter
const Users = () => (
  <div className="content">
    <Helmet>
      <title>Users</title>
    </Helmet>

    <h2>Users</h2>

    <Container />
  </div>
);

export default Users;
