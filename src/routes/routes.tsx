import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { MainPage } from "../pages/Main/MainPage";

export const RedirectToLoginPageIUserNotAuth = () => {
  const token = localStorage.getItem("token");  

  return <>{token ? <MainPage /> : <Navigate to={"/auth/login"} />}</>;
};

export const routes = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <RedirectToLoginPageIUserNotAuth />,
  },
]);
