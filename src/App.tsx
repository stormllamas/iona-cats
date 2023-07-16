import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home";
import CatDetail from "./components/pages/CatDetail";

import "./assets/scss/main.scss";

import { loader as catLoader } from "./loaders/cat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
