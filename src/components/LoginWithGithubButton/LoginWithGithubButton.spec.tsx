import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginOrLogoutWithGithubButton } from "./LoginWithGithubButton";

describe("Login With Github Button Component", () => {
  it("should call a function when component was clicked", async () => {
    const mockClickFunction = jest.fn();
    const { getByRole } = render(
      <LoginOrLogoutWithGithubButton onLogin={() => mockClickFunction()} >Any</LoginOrLogoutWithGithubButton>
    );

    await userEvent.click(getByRole("button"));

    expect(mockClickFunction).toHaveBeenCalled();
  });
  it("should have a element with testid: github-icon", () => {
    const { getByTestId } = render(
      <LoginOrLogoutWithGithubButton onLogin={() => console.log()} >Any</LoginOrLogoutWithGithubButton>
    );

    expect(getByTestId("github-icon")).toBeInTheDocument();
  });
  it("should have a content text: Login With Github", () => {
    const { container } = render(
      <LoginOrLogoutWithGithubButton onLogin={() => console.log()} >Login with github</LoginOrLogoutWithGithubButton>
    );

    expect(container).toHaveTextContent(/login with github/i);
  });
});
