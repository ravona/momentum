import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();
const useNotification = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("Welcome!");

  const printNotification = (text) => setNotification(text);

  return (
    <NotificationContext.Provider value={{ notification, printNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { useNotification, NotificationProvider };
