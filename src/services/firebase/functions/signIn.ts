import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { SetStateAction } from "react";
import { auth } from "../firebaseApi";
import { githubProvider } from "../githubProvider";

export const signInWithGithubPopUp = (
  setUser: React.Dispatch<
    SetStateAction<{
      name: string;
      email: string;
      url_profile: string;
    } | null>
  > | null,
  setToken: React.Dispatch<SetStateAction<string | null>> | null
) =>
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      setToken?.(token || null);
      setUser?.({
        name: user.displayName || "",
        email: user.email || "",
        url_profile: user.photoURL || "",
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    });
