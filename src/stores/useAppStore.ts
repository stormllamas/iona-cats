import { useCallback, useState } from "react";

import { ToastType } from "../types/context/app";

import { DEFAULT_APP_STORE_VALUE } from "../constants/appStore";

const useAppStore = () => {
  const [appStore, setAppStore] = useState(DEFAULT_APP_STORE_VALUE);

  const addToast = useCallback((toast: ToastType) => {
    setAppStore((prev) => ({
      ...prev,
      toasts: [...prev.toasts, toast],
    }));
  }, []);

  const removeToast = useCallback((toast: ToastType) => {
    setAppStore((prev) => ({
      ...prev,
      toasts: prev.toasts.filter((t) => t.id !== toast.id),
    }));
  }, []);

  return {
    appStore,
    addToast,
    removeToast,
  };
};

export default useAppStore;
