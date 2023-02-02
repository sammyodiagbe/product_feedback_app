import { useContext } from "react";
import { notificationContext } from "../context/notificationContext";

const Snackbar = () => {
  const snackContext = useContext(notificationContext);
  const { message } = snackContext;
  return message != null ? (
    <div className="snackbar">
      <p>{message}</p>
    </div>
  ) : null;
};

export default Snackbar;
