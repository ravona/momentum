import React from "react";

import "./Notification.scss";

const Notification = ({ text }) => {
  return (
    <>
      <p className="notification">{text}</p>
    </>
  );
};

export default Notification;
