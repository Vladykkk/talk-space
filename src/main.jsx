import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Registration from "./pages/login/Registration.jsx";
import RegistrationSecond from "./pages/login/RegistrationSecond.jsx";
import RegistrationThird from "./pages/login/RegistrationThird.jsx";
import Login from "./pages/login/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/registrationSecond",
    element: <RegistrationSecond />,
  },
  {
    path: "/registrationThird",
    element: <RegistrationThird />,
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
