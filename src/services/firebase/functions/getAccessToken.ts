import { getRedirectResult, GithubAuthProvider } from "firebase/auth";
import React, { SetStateAction } from "react";
import { auth } from "../firebaseApi";

export const getAccessToken = (
  setUser: React.Dispatch<
    SetStateAction<{
      name: string,
      email: string,
      url_profile: string,
    } | null>
  > | null,
  setToken: React.Dispatch<SetStateAction<string | null>> | null
) =>
  getRedirectResult(auth)
    .then((result) => {

        console.log('aaaaaaaaaaaa')
      if (result) {
        const credential = GithubAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
          setToken?.(token || null);
        }

        const user = result?.user;
        setUser?.({
          name: user.displayName || "",
          email: user.email || "",
          url_profile: user.photoURL || "",
        });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    });
