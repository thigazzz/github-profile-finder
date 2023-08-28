import React, { useContext, useEffect, useState } from "react";
import { ShowGithubProfileInformations } from "../../components/ShowGithubProfileInformations/ShowGithubProfileInformations";
import { LoginOrLogoutWithGithubButton } from "../../components/LoginOrLogoutWithGithubButton/LoginOrLogoutWithGithubButton";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { InputSeachGithubProfile } from "../../components/SearchInput/InputSeachGithubProfile";
import { AuthContext, IAuthContext } from "../../contexts/auth/AuthContext";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";
import { receiveGithubUserProfileData } from "./functions/receiveGithubUserProfileData";
import { handleSearchUser } from "./handles/handleSearchUser";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../interfaces/Profile";

export const MainPage = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const { user, logoutWithGithub, setUser, setToken } = useContext(AuthContext) as IAuthContext;
  const { setLoading } = useContext(LoadingContext) as ILoadingContext;
  const navigate = useNavigate();
  const [githubUsernameToSearch, setGithubUsernameToSearch] = useState("");
  const [githubProfileData, setGithubProfileData] = useState<{
    githubUserData: Profile | null;
    errorMessage: {
      message: string;
    } | null;
  }>({
    errorMessage: null,
    githubUserData: null,
  });

  const handleLgout = async () => {
    await logoutWithGithub();

    navigate("/auth/login");
  };

  useEffect(() => {
    setUser?.(JSON.parse(localStorage.getItem('user') || ''))
    setToken?.(localStorage.getItem('token'))
  }, []);

  return (
    <div {...rest} className="w-full h-full flex  items-center flex-col">
      <header className="w-full h-[8vh]  justify-self-start p-5 flex items-center justify-between">
        <span className="text-white lg:text-xl font-bold text-lg">
          git.Search
        </span>
        <div className="h-full flex items-center justify-center ">
          <LoginOrLogoutWithGithubButton
            data-testid="login-with-github-button-component"
            onLogout={handleLgout}
          >
            <div className="flex-1 text-xs sm:text-sm xl:text-lg h-full flex justify-center items-center">
              {user?.name}
              <HiOutlineLogout className="ml-2 text-lg" />
            </div>
          </LoginOrLogoutWithGithubButton>
        </div>
      </header>

      <div className="w-full flex-1 flex justify-center items-center">
        <main className="w-full h-[80%] sm:h-[60%] md:w-[90%] lg:w-[80%] xl:w-[70%] rounded-md p-5 flex items-center flex-col shadow-sm ">
          <div className="w-full h-10 md:h-14 flex items-center">
            <div className="w-full h-full flex-1">
              <InputSeachGithubProfile
                data-testid="search-input-component"
                onChange={(event) =>
                  setGithubUsernameToSearch(event.target.value)
                }
                value={githubUsernameToSearch}
              />
            </div>
            <div className="h-full w-10 ml-2 md:w-14">
              <SearchButton
                data-testid="search-button-component"
                onClick={() =>
                  handleSearchUser(
                    githubUsernameToSearch,
                    setGithubProfileData,
                    setLoading
                  )
                }
              />
            </div>
          </div>
          <div className="w-full sm:h-[350px] bg-gray-800 rounded-md  p-5 flex justify-center items-center flex-1 mt-2 overflow-hidden">
            <ShowGithubProfileInformations
              data-testid="getted-github-profile-component"
              profileData={githubProfileData.githubUserData}
              errorMessage={githubProfileData.errorMessage}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
