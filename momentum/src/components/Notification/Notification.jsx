import React from "react";

// style:
import "./Notification.scss";

const Notification = ({ text }) => {
  return (
    <>
      <p className="notification">{text}</p>
    </>
  );
};

export default Notification;
