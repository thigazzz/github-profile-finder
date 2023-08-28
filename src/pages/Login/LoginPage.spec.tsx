import { render } from "@testing-library/react";
import { LoginPage } from "./LoginPage";

describe("Login Page", () => {
  it("should have a slogan title", () => {
    const { getByTestId } = render(<LoginPage />);

    expect(getByTestId("slogan-container")).toHaveTextContent(
      /Find your favorite programming developers/i
    );
  });
  it("should have a button github login", () => {
    const { getByTestId } = render(<LoginPage />);

    expect(
      getByTestId(/login-with-github-button-component/i)
    ).toBeInTheDocument();
  });
});
