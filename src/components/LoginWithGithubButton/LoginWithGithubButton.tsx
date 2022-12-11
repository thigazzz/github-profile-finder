import { ButtonHTMLAttributes } from "react";

export const LoginWithGithubButton = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...rest}>Login</button>;
};
