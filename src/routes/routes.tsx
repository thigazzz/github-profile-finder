import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { MainPage } from "../pages/Main/MainPage";

export const routes = createBrowserRouter([
    {
        path: '/auth/login',
        element: <LoginPage/>
    },
    {
        path: '/',
        element: <MainPage/>
    }
])