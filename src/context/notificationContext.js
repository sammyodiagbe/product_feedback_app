import { createContext, useState } from "react";

export const notificationContext = createContext();

const NotificationContextWrapper = ({ children }) => {
  const [message, setShowNotificationMessage] = useState(null);

  const setNotificationMessage = (message) => {
    setNotificationMessage(message);
    setTimeout(() => setShowNotificationMessage(null), 5000);
  };

  return (
    <notificationContext.Provider value={{ setNotificationMessage, message }}>
      {children}
    </notificationContext.Provider>
  );
};

export default NotificationContextWrapper;
