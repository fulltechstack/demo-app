import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { props, useEffect } from "react";

function ToastNotification(props) {
  const showNotification = () => {
    if (props.notification) {
      if (props.notification.type === "success") {
        toast.success(props.notification.message);
      } else {
        toast.error(props.notification.message);
      }
    }
  };

  useEffect(showNotification, [props.notification]);

  return <></>;
}
export default ToastNotification;
