import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  children,
  onMenuClick,
}) => (
  <section className="hero header">
    <div className="level is-mobile">
      <div className="level-left">
        <div className="control level-item is-hidden-tablet">
          <button className="button is-primary menu-toggle u-mr1"><span className="icon-menu"></span></button>
        </div>
        <div className="level-item">
          <a href="/">
            <img alt="" className="logo image" src="/images/logo.svg" />
          </a>
        </div>
      </div>
      <div className="user-info">
        <div className="has-text-right is-hidden-mobile">
          <div className="user-meta">
            <h4 className="title is-4 is-spaced">Hi, Display Name</h4>
            <p className="subtitle is-6"><a href="">Customize your profile</a> | <a href=""><span className="icon-logout"></span></a></p>
          </div>
        </div>
        <a className="settings" href=""><span className="icon-settings"></span></a>
        <figure className="image profile-thumbnail">
          <img src="https://avatarfiles.alphacoders.com/696/69632.jpg" alt="Placeholder image" />
        </figure>
      </div>
    </div>
  </section>
);

export default Header;
