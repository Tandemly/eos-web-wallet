import React from 'react';
import { connect } from 'react-redux';
import { Icon, Link, List } from '../../components';

/* TODO relocate */
const User = ({ url, name, status, icon }) => (
  <div className="transaction">
    <Link to={url}>
      <div className="user-meta d-flex flex-row items-center">
        <Icon
          className="transaction-thumbnail"
          url={icon}
        />
        <div className="transaction-data ml-3">
          <div className="transaction-sender mb-1"><a>{name}Demo Name</a></div>
          <div className="transaction-memo mb-0">{status}</div>
        </div>
      </div>
    </Link>
  </div>
);

const mapStateToProps = ({ users: { all } }) => ({
  data: all,
  renderItem: User,
});

const UsersContainer = connect(
  mapStateToProps,
)(List);

export default UsersContainer;
