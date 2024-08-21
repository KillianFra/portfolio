import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <Home />,
  },
], {basename: import.meta.env.BASE_URL});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
);
