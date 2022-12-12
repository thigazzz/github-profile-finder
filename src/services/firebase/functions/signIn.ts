import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseApi";
import { githubProvider } from "../githubProvider";

export const signInWithGithubPopUp = async (): Promise<{token: string, user: {name: string, email: string, url_profile: string} | {errorCode: string}}> =>
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      return {
        token: token,
        user: {
          name: user.displayName || "",
          email: user.email || "",
          url_profile: user.photoURL || "",
        },
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);

      return errorCode
    });
