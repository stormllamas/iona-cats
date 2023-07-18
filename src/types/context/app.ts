import { ID } from "../common";

export type ToastType = {
  id: ID;
  message: string;
};

export interface AppContextType {
  appStore: {
    toasts: ToastType[];
  };
  addToast: (toast: ToastType) => void;
  removeToast: (toast: ToastType) => void;
}
