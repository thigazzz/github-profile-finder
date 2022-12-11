import { createContext, ReactNode, SetStateAction, useState } from "react";
import { getAccessToken } from "../../services/firebase/functions/getAccessToken";

interface IAuthContext {
  user: { name: string; email: string; url_profile: string } | null;
  setUser: React.Dispatch<
    SetStateAction<{ name: string; email: string; url_profile: string } | null>
  > | null;
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>> | null;
  signInWithGithub: () => void;
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
    await getAccessToken(setUser, setToken);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token || "");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, signInWithGithub }}
    >
      {children}
    </AuthContext.Provider>
  );
};
