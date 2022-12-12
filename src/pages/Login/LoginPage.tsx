import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginOrLogoutWithGithubButton } from "../../components/LoginWithGithubButton/LoginWithGithubButton";
import { AuthContext, IAuthContext } from "../../contexts/auth/AuthContext";

export const LoginPage = () => {
  const { signInWithGithub } = useContext(AuthContext) as IAuthContext;
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithGithub();

    navigate("/");
  };

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
        {/* <div className="mt-10 w-full">
          <span className="font-medium text-gray-200 text-start text-lg">
            Sign In
          </span>
        </div> */}
        <div className="w-full flex-1 flex items-center justify-center ">
          <div className="h-20 w-full">
            <LoginOrLogoutWithGithubButton
              onLogin={handleLogin}
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
