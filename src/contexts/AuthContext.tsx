import { createContext, ReactNode, SetStateAction, useState } from "react";

interface IAuthContext {
  user: { name: string; email: string; url_profile: string } | null;
  setUser: React.Dispatch<
    SetStateAction<{ name: string; email: string; url_profile: string } | null>
  > | null;
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>> | null;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    url_profile: string;
  } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
