import { ToastType } from "../types/context/app";

export const DEFAULT_TOAST_TIMEOUT = 7500;
export const DEFAULT_TOAST_MESSAGE =
  "Apologies but we could not load new cats for you at this time! Miau!";

export const DEFAULT_TOASTS: ToastType[] = [];

export const DEFAULT_APP_STORE_VALUE = {
  toasts: DEFAULT_TOASTS,
};

export const DEFAULT_APP_CONTEXT_VALUE = {
  appStore: DEFAULT_APP_STORE_VALUE,
  addToast: (toast: ToastType) => {
    console.log(toast);
  },
  removeToast: (toast: ToastType) => {
    console.log(toast);
  },
};
