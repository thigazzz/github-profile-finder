import { LoginWithGithubButton } from "../../components/LoginWithGithubButton/LoginWithGithubButton";

export const LoginPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-between flex-col sm:flex-row">
      <section className="w-full h-[30%] bg-gradient-to-b from-green-600 to-gray-900 flex items-center justify-center sm:w-[40%] md:w-[60%] sm:h-full sm:bg-gradient-to-r">
        <h2 className="text-center text-gray-200 text-xl md:text-2xl">
          Find your favorite <br />{" "}
          <span className="font-bold text-2xl md:text-3xl"> programming developers</span>
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
            <LoginWithGithubButton
              onLogin={() => console.log()}
              data-testid="login-with-github-button-component"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
