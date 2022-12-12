import { ButtonHTMLAttributes, ReactNode } from "react";
import { BsGithub } from "react-icons/bs";

interface LoginOrLogoutWithGithubButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onLogin?: () => void;
  onLogout?: () => void;
  children: ReactNode
}

export const LoginOrLogoutWithGithubButton = ({
  onLogin,
  onLogout,
  children,
  ...rest
}: LoginOrLogoutWithGithubButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onLogin ? onLogin : onLogout}
      className="w-full h-full bg-gray-800 rounded-2xl text-gray-200 flex p-6 items-center hover:bg-gray-700 transition-all"
    >
      <BsGithub data-testid="github-icon" className="text-2xl">
        Icon
      </BsGithub>
      <span className="ml-4 font-bold">{children}</span>
    </button>
  );
};
