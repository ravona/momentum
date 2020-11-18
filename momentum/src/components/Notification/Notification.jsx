import React from "react";

import "./Notification.css";

const Notification = ({ text }) => {
  return (
    <>
      <p className="notification">{text}</p>
    </>
  );
};

export default Notification;
