import { useContext } from "react";
import { notificationContext } from "../context/notificationContext";

const Snackbar = () => {
  const snackContext = useContext(notificationContext);
  const { message } = snackContext;
  return message != null ? (
    <div className={`snackbar ${message == null && "hide"}`}>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Snackbar;
