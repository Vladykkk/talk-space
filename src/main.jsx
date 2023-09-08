import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/common.css";
import "./assets/css/register.css";
import "./assets/css/auth.css";

import App from "./App.jsx";
import Register from "./pages/login/Register.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
