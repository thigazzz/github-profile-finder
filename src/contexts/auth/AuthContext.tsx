import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAccessToken } from "../../services/firebase/functions/getAccessToken";
import { logout } from "../../services/firebase/functions/logout";
import { signInWithGithubPopUp } from "../../services/firebase/functions/signIn";

export interface IAuthContext {
  user: { name: string; email: string; url_profile: string } | null;
  setUser: React.Dispatch<
    SetStateAction<{ name: string; email: string; url_profile: string } | null>
  > | null;
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>> | null;
  signInWithGithub: () => Promise<void>;
  logoutWithGithub: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    url_profile: string;
  } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const signInWithGithub = async () => {
    const { token, user } = await signInWithGithubPopUp();

    console.log(token, user);

    setUser(user as { name: string; email: string; url_profile: string });
    setToken(token);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token || "");
  };
  const logoutWithGithub = async () => {
    await logout();

    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        signInWithGithub,
        logoutWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
