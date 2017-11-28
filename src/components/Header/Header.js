import React from "react";
import { Link } from "react-router-dom";
import css from "./styles.module.scss";
import cx from "classnames";
import withProfile from "../../containers/Profile/index";

const renderHeaderUser = (imageUrl, displayName, onLogout) => (
  <div className={css.user_info}>
    <div className="has-text-right is-hidden-mobile">
      <div className={css.user_meta}>
        <h4 className={cx("title is-4 is-spaced", css.title)}>
          Hi, {displayName}
        </h4>
        <p className={cx("subtitle is-6", css.subtitle)}>
          <Link to="/profile">Customize your profile</Link> | <span> </span>
          <span onClick={onLogout} className="icon-logout" />
        </p>
      </div>
    </div>

    <Link className={css.settings} to="/profile">
      <span className="icon-settings" />
    </Link>

    <figure className={cx("image", css.profile_thumbnail)}>
      <img src={imageUrl === "" ? "/images/user.png" : imageUrl} alt="Profile thumbnail" />
    </figure>
  </div>
);

const Header = ({
  children,
  isAuthenticated,
  onClick,
  onLogout,
  userProfile: { imageUrl = "/images/user.png", displayName = "Display Name" },
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
        ? renderHeaderUser(imageUrl, displayName, onLogout)
        : null}
    </div>
  </header>
);

export default withProfile(Header);
