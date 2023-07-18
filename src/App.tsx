import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeProvider from "react-bootstrap/esm/ThemeProvider";

import { CatContextType } from "./types/context/cat";

import Home from "./components/pages/Home";
import CatDetail from "./components/pages/CatDetail";

import "./assets/scss/main.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { catBreedsLoader, catLoader } from "./loaders/cat";
import { createContext, useState } from "react";
import {
  DEFAULT_CAT_CONTEXT_VALUE,
  DEFAULT_CAT_STORE_VALUE,
} from "./constants/catStore";
import { AppContextType, ToastType } from "./types/context/app";
import {
  DEFAULT_APP_CONTEXT_VALUE,
  DEFAULT_APP_STORE_VALUE,
} from "./constants/appStore";
import ToastContainer from "./components/common/toaster/ToastContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: catBreedsLoader,
  },
  {
    path: "cats/:catId",
    element: <CatDetail />,
    loader: catLoader,
  },
]);

export const AppContext = createContext<AppContextType>(
  DEFAULT_APP_CONTEXT_VALUE
);

export const CatContext = createContext<CatContextType>(
  DEFAULT_CAT_CONTEXT_VALUE
);

const App = () => {
  const [appStore, setAppStore] = useState(DEFAULT_APP_STORE_VALUE);

  const addToast = (toast: ToastType) => {
    setAppStore((prev) => ({
      ...prev,
      toasts: [...prev.toasts, toast],
    }));
  };

  const removeToast = (toast: ToastType) => {
    setAppStore((prev) => ({
      ...prev,
      toasts: prev.toasts.filter((t) => t.id !== toast.id),
    }));
  };

  const appContextValue = {
    appStore,
    addToast,
    removeToast,
  };

  const [catStore, setCatStore] = useState(DEFAULT_CAT_STORE_VALUE);

  const updateSelectedBreed = (selectedBreed: string) => {
    setCatStore((prev) => ({
      ...prev,
      catsByBreedPage: 1,
      selectedBreed,
    }));
  };

  const updateCatsByBreedPage = (catsByBreedPage: number) => {
    setCatStore((prev) => ({
      ...prev,
      catsByBreedPage,
    }));
  };

  const updateEndOfCatsByBreedPage = (endOfCatsByBreedPage: boolean) => {
    setCatStore((prev) => ({
      ...prev,
      endOfCatsByBreedPage,
    }));
  };

  const catContextValue = {
    catStore,
    updateSelectedBreed,
    updateCatsByBreedPage,
    updateEndOfCatsByBreedPage,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <CatContext.Provider value={catContextValue}>
        <div className="App position-relative">
          <ToastContainer />
          <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
          >
            <RouterProvider router={router} />;
          </ThemeProvider>
        </div>
      </CatContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
