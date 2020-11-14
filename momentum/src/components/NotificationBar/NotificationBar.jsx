import React from "react";

import "./NotificationBar.css";

const NotificationBar = ({ message }) => {
  return <h1 className="streak-notificationBar">{message}</h1>;
};

export default NotificationBar;
