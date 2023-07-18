import { useContext } from "react";
import { ToastContainer as TContainer } from "react-bootstrap";

import { AppContext } from "../../../App";
import Toast from "./Toast";

const ToastContainer = () => {
  const { appStore } = useContext(AppContext);
  const { toasts } = appStore;

  return (
    <TContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </TContainer>
  );
};

export default ToastContainer;
