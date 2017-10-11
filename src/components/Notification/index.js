import * as React from "react";

const Notification = ({ text, status }) => (status ? (
  <div className={`notification ${status}`}>{text}</div>
) : null);

export default Notification;
