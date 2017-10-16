import * as React from "react";
import { Link } from "react-router-dom";

const User = ({ icon, key, name = "", status, url }) => (
  <li className="level box user is-mobile" key={key}>
    <div className="level-left">
      <div className="level-item">
        <img className="image" src="/images/male_2.jpg" />
      </div>
      <div className="level-item">
        <div>
          <p className="username"><a>{name}</a></p>
          <p className="memo">Memo</p>
        </div>
      </div>
    </div>
  </li>
);

export default User;