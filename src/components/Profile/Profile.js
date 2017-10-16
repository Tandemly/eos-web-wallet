import * as React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// TODO styles
const Profile = ({
  image: {
    url: src,
  },
  location,
  name,
  status,
}) => (
  <div className="profile">
    <h2>{name}</h2>

    <img
      src={src}
      alt={name}
    />

    <p>{location}</p>
    <p>{status}</p>
  </div>
);

export default Profile;
