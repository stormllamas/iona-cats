import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeProvider from "react-bootstrap/esm/ThemeProvider";

import Home from "./components/pages/Home";
import CatDetail from "./components/pages/CatDetail";

import "./assets/scss/main.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { catBreedsLoader, catLoader } from "./loaders/cat";

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

const App = () => {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <RouterProvider router={router} />;
      </ThemeProvider>
    </div>
  );
};

export default App;
