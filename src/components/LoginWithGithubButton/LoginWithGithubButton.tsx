import { ButtonHTMLAttributes } from "react";
import { BsGithub } from "react-icons/bs";

interface LoginWithGithubButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onLogin: () => void;
}

export const LoginWithGithubButton = ({
  onLogin,
  ...rest
}: LoginWithGithubButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onLogin}
      className="w-full h-full bg-gray-800 rounded-2xl text-gray-200 flex p-6 items-center hover:bg-gray-700 transition-all"
    >
      <BsGithub data-testid="github-icon" className="text-2xl">Icon</BsGithub>
      <span className="ml-4 font-bold">
      login with Github
      </span>
    </button>
  );
};
