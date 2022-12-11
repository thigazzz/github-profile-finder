import { LoginWithGithubButton } from "../../components/LoginWithGithubButton/LoginWithGithubButton";

export const LoginPage = () => {
  return (
    <div>
      <h2>Find your favorite programming developers</h2>
      <LoginWithGithubButton data-testid="login-with-github-button-component" />
    </div>
  );
};
