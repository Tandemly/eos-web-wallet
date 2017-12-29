import * as React from "react";
import { Link } from "react-router-dom";
import css from "./styles.module.scss";
import cx from "classnames";

const User = ({
  key,
  userId,
  profile,
  userProfile: { eosAccount, imageUrl = "/images/user.png", displayName, about }
}) => (
  <li className={cx("box user is-mobile", css.user)} key={key}>
    <div className="columns is-variable is-2 is-mobile">
      <div className="column is-narrow">
        <div className="thumb-wrapper">
          <img
            className="user-thumb"
            src={imageUrl === "" ? "/images/user.png" : imageUrl}
            alt={displayName || userId || `@${eosAccount}`}
          />
        </div>
      </div>
      <div className="column">
        <div className={css["user-info"]}>
          <p className="username">
            {profile ? (
              <Link to={profile}>
                {displayName || userId || `@${eosAccount}`}
              </Link>
            ) : (
              <a>{displayName || userId || `@${eosAccount}`}</a>
            )}
          </p>
          <p className="memo">{about}</p>
        </div>
      </div>
    </div>
  </li>
);

export default User;
