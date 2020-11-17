import React from "react";
import { useNotification } from "../../context/NotificationProvider";

import "./Notification.css";

export const Notification = () => {
  const { notification } = useNotification();

  return (
    <>
      <h2 className="notification">{notification}</h2>
    </>
  );
};
