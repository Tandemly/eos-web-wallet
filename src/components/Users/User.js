import * as React from "react";

const User = ({ icon, key, name = "", status, url }) => (
  <li className="box user is-mobile" key={key}>
    <div className="columns is-variable is-2 is-mobile">
      <div className="column is-narrow">
        <div className="thumb-wrapper">
          <img
            className="user-thumb"
            src="/images/male_2.jpg"
            alt="Placeholder avatar thumbnail"
          />
        </div>
      </div>
      <div className="column">
        <div>
          <p className="username">
            <a>{name}</a>
          </p>
          <p className="memo">
            Memo
          </p>
        </div>
      </div>
    </div>
  </li>
);

export default User;
