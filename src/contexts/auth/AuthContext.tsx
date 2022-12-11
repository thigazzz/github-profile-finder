import { createContext, ReactNode, SetStateAction, useState } from "react";
import { getAccessToken } from "../../services/firebase/functions/getAccessToken";
import { signIn } from "../../services/firebase/functions/signIn";

export interface IAuthContext {
  user: { name: string; email: string; url_profile: string } | null;
  setUser: React.Dispatch<
    SetStateAction<{ name: string; email: string; url_profile: string } | null>
  > | null;
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>> | null;
  signInWithGithub: () => Promise<void>;
  getAndSetAccessToken: () => void
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
    console.log('aaaaaaaa')

    await signIn()

    console.log('bbbbbbbbb')
    
  };
  const getAndSetAccessToken =  async () => {
    console.log('bbbbbbbbb')
    await getAccessToken(setUser, setToken);

    console.log('zzzzzzzzzzz', user, token)

    
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, signInWithGithub,getAndSetAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
