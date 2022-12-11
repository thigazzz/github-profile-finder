import { render } from "@testing-library/react";
import { ButtonHTMLAttributes } from "react";

const LoginWithGithubButton = ({...rest}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...rest}>Login</button>
    )
}

const LoginPage = () => {
  return (
    <div>
      <h2>Find your favorite programming developers</h2>
      <LoginWithGithubButton data-testid='login-with-github-button-component'/>
    </div>
  );
};

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
