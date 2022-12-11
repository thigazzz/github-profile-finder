import { ButtonHTMLAttributes } from "react";

export const LoginWithGithubButton = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest}>
      <span data-testid="github-icon">Icon</span>
      Login with Github
    </button>
  );
};
