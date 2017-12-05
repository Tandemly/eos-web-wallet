import React from "react";
import { Link } from "react-router-dom";
import css from "./styles.module.scss";
import cx from "classnames";
import withProfile from "../../containers/profile/index";
import withUserId from "../../containers/current-user/index";

const renderHeaderUser = (
  userId,
  imageUrl,
  displayName,
  location,
  onLogout
) => (
  <div className={css.user_info}>
    <div className="has-text-right is-hidden-mobile">
      <div className={css.user_meta}>
        <h4 className={cx("title is-4 is-spaced", css.title)}>
          Hi, {displayName || userId}
        </h4>
        <p className={cx("subtitle is-6", css.subtitle)}>
          <Link to="/profile">{location || "Customize your profile"}</Link> |{" "}
          <span> </span>
          <span onClick={onLogout} className="icon-logout" />
        </p>
      </div>
    </div>

    <Link className={css.settings} to="/profile">
      <span className="icon-settings" />
    </Link>

    <figure className={cx("image", css.profile_thumbnail)}>
      <img
        src={imageUrl === "" ? "/images/user.png" : imageUrl}
        alt={displayName || userId}
      />
    </figure>
  </div>
);

const Header = ({
  children,
  isAuthenticated,
  onClick,
  onLogout,
  userId,
  userProfile: { imageUrl = "/images/user.png", displayName, location },
  ...props
}) => (
  <header className={cx("hero", css.header)}>
    <div className="level is-mobile">
      <div className="level-left">
        <div className="control level-item is-hidden-tablet">
          <button
            className={cx("button is-primary u-mr1", css.menu_toggle)}
            onClick={onClick}
          >
            <span className="icon-menu" />
          </button>
        </div>

        <div className="level-item">
          <Link to="/">
            <img
              alt=""
              className={cx("image", css.logo)}
              src="/images/logo.svg"
            />
          </Link>
        </div>
      </div>

      {isAuthenticated
        ? renderHeaderUser(userId, imageUrl, displayName, location, onLogout)
        : null}
    </div>
  </header>
);

export default withUserId(withProfile(Header));
