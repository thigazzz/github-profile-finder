import { routes } from "./routes";

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
