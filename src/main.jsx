import React from "react";
import ReactDOM from "react-dom/client";

// import "./assets/css/common.css";
// import "./assets/css/register.css";
import "./assets/css/index.css";

import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import Register from "./pages/login/Register.jsx";
import Login from "./pages/login/Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
