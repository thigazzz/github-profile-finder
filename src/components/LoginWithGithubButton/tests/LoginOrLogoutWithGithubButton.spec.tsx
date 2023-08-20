import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginOrLogoutWithGithubButton } from "../LoginOrLogoutWithGithubButton";

describe("Login With Github Button Component", () => {
  it("should call a login function when component was clicked", async () => {
    const mockLoginFunction = jest.fn();
    const { getByRole } = render(
      <LoginOrLogoutWithGithubButton onLogin={() => mockLoginFunction()} >Any</LoginOrLogoutWithGithubButton>
    );

    await userEvent.click(getByRole("button"));

    expect(mockLoginFunction).toHaveBeenCalled();
  });
  it("should call a logout function when component was clicked", async () => {
    const mockLogoutFunction = jest.fn();
    const { getByRole } = render(
      <LoginOrLogoutWithGithubButton onLogout={() => mockLogoutFunction()} >Any</LoginOrLogoutWithGithubButton>
    );

    await userEvent.click(getByRole("button"));

    expect(mockLogoutFunction).toHaveBeenCalled();
  });
  it("should have a element with testid: github-icon", () => {
    const { getByTestId } = render(
      <LoginOrLogoutWithGithubButton >Any</LoginOrLogoutWithGithubButton>
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
