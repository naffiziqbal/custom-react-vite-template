import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
