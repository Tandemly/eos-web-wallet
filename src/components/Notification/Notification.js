import * as React from "react";
import cx from "classnames";
import css from "./notification.module.scss";

const Notification = ({ text, status }) => (
 <div 
  className={cx(css.notification, css[status])}>
    {text}
  </div>
);

export default Notification;
