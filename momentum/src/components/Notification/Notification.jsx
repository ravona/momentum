import React from "react";

// context:
import { useNotification } from "../../context/NotificationProvider";

// style:
import "./Notification.css";

export const Notification = () => {
  const { notification } = useNotification();

  return (
    <>
      <h2 className="notification">{notification}</h2>
    </>
  );
};
