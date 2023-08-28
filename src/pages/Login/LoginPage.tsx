import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginOrLogoutWithGithubButton } from "../../components/LoginOrLogoutWithGithubButton/LoginOrLogoutWithGithubButton";
import { AuthContext, IAuthContext } from "../../contexts/auth/AuthContext";
import { handleSignInWithGithub } from "./utils/handleLogin";

export const LoginPage = () => {
  const { signInWithGithub } = useContext(AuthContext) as IAuthContext;
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-between flex-col sm:flex-row">
      <section className="w-full h-[30%] bg-gradient-to-b from-green-600 to-gray-900 flex items-center justify-center sm:w-[40%] md:w-[60%] sm:h-full sm:bg-gradient-to-r">
        <h2
          className="text-center text-gray-200 text-xl md:text-2xl"
          data-testid="slogan-container"
        >
          Find your favorite <br />{" "}
          <span className="font-bold text-2xl md:text-3xl">
            {" "}
            programming developers
          </span>
        </h2>
      </section>
      <section className="flex-1 flex  flex-col w-full p-4">
        <div className="w-full flex-1 flex items-center justify-center ">
          <div className="h-20 w-full">
            <LoginOrLogoutWithGithubButton
              onLogin={() => handleSignInWithGithub(signInWithGithub, navigate)}
              data-testid="login-with-github-button-component"
            >
              Login with Github
            </LoginOrLogoutWithGithubButton>
          </div>
        </div>
      </section>
    </div>
  );
};
