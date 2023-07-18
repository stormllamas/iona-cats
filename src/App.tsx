import { createContext } from "react";
import ThemeProvider from "react-bootstrap/esm/ThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppContextType } from "./types/context/app";
import { CatContextType } from "./types/context/cat";

import { DEFAULT_APP_CONTEXT_VALUE } from "./constants/appStore";
import { DEFAULT_CAT_CONTEXT_VALUE } from "./constants/catStore";

import ToastContainer from "./components/common/toaster/ToastContainer";
import CatDetail from "./components/pages/CatDetail";
import Home from "./components/pages/Home";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { catBreedsLoader, catLoader } from "./loaders/cat";
import useAppStore from "./stores/useAppStore";
import useCatStore from "./stores/useCatStore";

import "./assets/scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: catBreedsLoader,
  },
  {
    path: ":catId",
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
  const appContextValue = useAppStore();
  const catContextValue = useCatStore();

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
