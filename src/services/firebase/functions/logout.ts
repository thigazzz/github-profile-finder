import { signOut } from "firebase/auth";
import { auth } from "../firebaseApi";

export const logout = async () =>
  signOut(auth)
    .then(() => console.log("logout sucessful"))
    .catch((error) => console.error(error));
