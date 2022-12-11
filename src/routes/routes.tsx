import { useContext, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthContext, IAuthContext } from "../contexts/auth/AuthContext";
import { LoginPage } from "../pages/Login/LoginPage";
import { MainPage } from "../pages/Main/MainPage";

export const RedirectToLoginPageIUserNotAuth = () => {
  const { getAndSetAccessToken, token } = useContext(
    AuthContext
  ) as IAuthContext;

  useEffect(() => {
    getAndSetAccessToken();
  }, []);

  return <>{token ? <MainPage /> : <LoginPage />}</>;
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
