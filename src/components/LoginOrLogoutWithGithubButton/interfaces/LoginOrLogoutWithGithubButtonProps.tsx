import { ButtonHTMLAttributes, ReactNode } from "react";

export interface LoginWithGithubButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onLogin?: () => void;
    onLogout?: () => void;
    children: ReactNode
}