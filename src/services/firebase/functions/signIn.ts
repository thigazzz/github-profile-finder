import { signInWithRedirect } from "firebase/auth";
import { auth } from "../firebaseApi";
import { githubProvider } from "../githubProvider";

export const signIn = () => signInWithRedirect(auth, githubProvider);
