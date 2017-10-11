import * as React from "react";
import { connect } from 'react-redux';
import Link from "react-router-dom";
import List from "components/List";
import User from "./User";

const mapStateToProps = ({ users: { all } }) => ({
  data: all,
  renderItem: User,
});

const Users = connect(
  mapStateToProps,
)(List);

export default Users;
