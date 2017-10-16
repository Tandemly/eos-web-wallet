import * as React from "react";
import { connect } from 'react-redux';
import Users from "components/Users";

// TODO replace fixture w API call
import users from "fixtures/users";

const mapStateToProps = () => ({
  data: users,
});

const Container = connect(
  mapStateToProps,
)(Users);

export default Container;
