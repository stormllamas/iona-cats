import { useContext, useEffect, useState } from "react";
import { Toast as BToast } from "react-bootstrap";

import { ToastType } from "../../../types/context/app";

import { DEFAULT_TOAST_TIMEOUT } from "../../../constants/appStore";

import { AppContext } from "../../../App";

const Toast = ({ toast }: { toast: ToastType }) => {
  const { removeToast } = useContext(AppContext);

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) {
      removeToast(toast);
    }
  }, [show, removeToast, toast]);

  return (
    <BToast
      onClose={() => setShow(false)}
      show={show}
      delay={DEFAULT_TOAST_TIMEOUT}
      autohide
    >
      <BToast.Header>
        <strong className="me-auto">Alert!</strong>
      </BToast.Header>
      <BToast.Body>{toast.message}</BToast.Body>
    </BToast>
  );
};

export default Toast;
