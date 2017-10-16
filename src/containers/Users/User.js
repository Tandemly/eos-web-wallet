import * as React from "react";
import { Link } from "react-router-dom";

const User = ({ icon, key, name, status, url }) => (
  <li key={key}>
    <div>
      <Link to={url} />
      <div className="user-meta d-flex flex-row items-center">
        {/* <Icon
          className="transaction-thumbnail"
          url={icon}
          /> */}

        <div className="transaction-data ml-3">
          <div className="transaction-sender mb-1"><a>{name}Demo Name</a></div>
          <div className="transaction-memo mb-0">{status}</div>
        </div>
      </div>
    </div>
  </li>
);

export default User;