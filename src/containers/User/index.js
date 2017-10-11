import * as React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const User = ({
  className = 'meta',
  greeting,
  link = {
    to: '/preferences',
  },
  location,
  name = 'Display Name',
  imgUrl = '/images/male_2.jpg',
  status,
  styles = {
    displayName: 'display-name hidden-sm-down',
    location: 'location',
    link: 'url hidden-sm-down',
    logout: 'logout',
    status: 'status',
    divider: 'divider px-2 hidden-sm-down',
    logoutIcon: 'icon icon-eos_icons_logout hidden-sm-down',
  },
}) => (
  <div className="account-info">
    <div className="thumbnail">
      <Link to="/preferences">
        <div className="settings icon-eos_icons_settings" />
      </Link>
      <img
        alt=""
        className="user-thumbnail"
        src={imgUrl}
      />
    </div>
    <div className={className}>

      <p className={styles.displayName}>{greeting}{name}</p>

      {location && <p className={styles.location}>{location}</p>}

      <div>
        <Link
          className={styles.link}
          to={link.to}
        >Customize your profile
        </Link>
        {<span>
          <span className={styles.divider}>|</span>
          <Link to="/logout" className={styles.logout}><span className={styles.logoutIcon} /></Link>
        </span>}
      </div>

      {/* <Icon
        className={styles.icon}
        size={location ? Icon.small : Icon.large}
      /> */}

      {status && <p className={styles.status}>{status}</p>}
    </div>
  </div>
);

const ConnectedUser = connect(state => ({
  name: state.login.user.display_name || state.login.user.account_name,
  imgUrl: state.login.user.image_url,
}))(User);

export default ConnectedUser;
