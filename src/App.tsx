import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeProvider from "react-bootstrap/esm/ThemeProvider";

import { CatContextType } from "./types/context/general";

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

export const CatContext = createContext<CatContextType>(
  DEFAULT_CAT_CONTEXT_VALUE
);

const App = () => {
  const [catStore, setCatStore] = useState(DEFAULT_CAT_STORE_VALUE);

  const updateSelectedBreed = (selectedBreed: string) => {
    setCatStore((prev) => ({
      ...prev,
      selectedBreed,
    }));
  };

  const updateCatsByBreedPage = (catsByBreedPage: number) => {
    setCatStore((prev) => ({
      ...prev,
      catsByBreedPage,
    }));
  };

  const catContextValue = {
    catStore,
    updateSelectedBreed,
    updateCatsByBreedPage,
  };

  return (
    <CatContext.Provider value={catContextValue}>
      <div className="App">
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <RouterProvider router={router} />;
        </ThemeProvider>
      </div>
    </CatContext.Provider>
  );
};

export default App;
