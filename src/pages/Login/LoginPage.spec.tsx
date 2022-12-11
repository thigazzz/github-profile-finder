import { render } from "@testing-library/react";
import { LoginPage } from "./LoginPage";

describe("Login Page", () => {
  it("should have a slogan title", () => {
    const { getByText } = render(<LoginPage />);

    expect(
      getByText(/Find your favorite programming developers/i)
    ).toBeInTheDocument();
  });
  it('should have a button github login', () => {
    const { getByTestId } = render(<LoginPage />);

    expect(
        getByTestId(/login-with-github-button-component/i)
      ).toBeInTheDocument();
  })
});
