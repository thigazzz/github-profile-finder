import { ButtonHTMLAttributes } from "react";

interface LoginWithGithubButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onLogin: () => void;
}

export const LoginWithGithubButton = ({
  onLogin,
  ...rest
}: LoginWithGithubButtonProps) => {
  return (
    <button {...rest} onClick={onLogin}>
      <span data-testid="github-icon">Icon</span>
      Login with Github
    </button>
  );
};
