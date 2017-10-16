import * as React from "react";
import { connect } from 'react-redux';
import Link from "react-router-dom";
import List from "components/List";
import User from "./User";

import users from "fixtures/users";

const mapStateToProps = () => ({
  data: users,
  renderItem: User,
});

const Users = ({ data, renderItem }) => (
  <div>
    <List
      data={data}
      renderItem={renderItem}
    />
  </div>
)

const Container = connect(
  mapStateToProps,
)(Users);

export default Container;
