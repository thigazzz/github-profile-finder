import { LoginPage } from "../pages/Login/LoginPage";
import { MainPage } from "../pages/Main/MainPage";
import {createBrowserRouter} from 'react-router-dom'

const routes = createBrowserRouter([
    {
        path: '/auth/login',
        element: <LoginPage/>
    },
    {
        path: '/',
        element: <MainPage/>
    }
])

describe("Routes", () => {
  it("should routes have two routes: login, main", () => {
    const sut = routes.routes.map(route => ({
        path: route.path,
    }));

    expect(sut).toEqual([
      {
        path: "/auth/login",
      },
      {
        path: "/",
      },
    ]);
  });
});
