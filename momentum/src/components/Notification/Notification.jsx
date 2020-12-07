import React from "react";

// style:
import "./Notification.scss";

export const Notification = ({text}) => {
  return (
    <>
      <p className="notification">{text}</p>
    </>
  );
};
