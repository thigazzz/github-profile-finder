import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginWithGithubButton } from "./LoginWithGithubButton";

describe("Login With Github Button Component", () => {
  it("should call a function when component was clicked", async () => {
    const mockClickFunction = jest.fn();
    const { getByRole } = render(
      <LoginWithGithubButton onLogin={() => mockClickFunction()} />
    );

    await userEvent.click(getByRole("button"));

    expect(mockClickFunction).toHaveBeenCalled();
  });
  it("should have a element with testid: github-icon", () => {
    const { getByTestId } = render(
      <LoginWithGithubButton onLogin={() => console.log()} />
    );

    expect(getByTestId("github-icon")).toBeInTheDocument();
  });
  it("should have a content text: Login With Github", () => {
    const { container } = render(
      <LoginWithGithubButton onLogin={() => console.log()} />
    );

    expect(container).toHaveTextContent(/login with github/i);
  });
});
