import React from "react";

// context:
import { useNotification } from "../../context/NotificationProvider";

// -- Bootstrap components:
import Alert from "react-bootstrap/Alert";

// style:
import "./Notification.scss";

export const Notification = () => {
  const { notification } = useNotification();

  return (
    <>
      <Alert className="Notification" variant="primary">
        {notification}
      </Alert>
    </>
  );
};
