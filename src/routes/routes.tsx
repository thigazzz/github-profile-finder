import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { AuthContext, IAuthContext } from "../contexts/auth/AuthContext";
import { LoginPage } from "../pages/Login/LoginPage";
import { MainPage } from "../pages/Main/MainPage";

export const RedirectToLoginPageIUserNotAuth = () => {
  const { getAndSetAccessToken } = useContext(AuthContext) as IAuthContext;
  const token = localStorage.getItem("token");

  useEffect(() => {
    getAndSetAccessToken();
  }, []);

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
