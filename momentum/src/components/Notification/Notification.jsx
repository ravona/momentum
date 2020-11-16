import React from "react";

import "./Notification.css";

const Notification = ({ text }) => {
  return (
    <>
      <h2 className="notification">{text}</h2>
    </>
  );
};

export default Notification;
