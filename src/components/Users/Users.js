import * as React from "react";
import List from "components/List";
import User from "./User";

// TODO add search filter
const Users = ({ data }) => (
  <div className="users-list">
    <List
      data={data}
      renderItem={User}
    />
  </div>
);

export default Users;
