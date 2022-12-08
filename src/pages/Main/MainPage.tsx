import React, { useState } from "react";
import { GettedGitHubProfile } from "../../components/GettedGitHubProfile/GettedGitHubProfile";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { GithubUserData } from "./functions/receiveGithubUserProfileData";
import { handleSearchUser } from "./handles/handleSearchUser";

export const MainPage = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const [githubUsernameToSearch, setGithubUsernameToSearch] = useState("");
  const [githubProfileData, setGithubProfileData] = useState<
    GithubUserData | undefined
  >(undefined);

  return (
    <div {...rest} className="w-full h-full flex  items-center flex-col">
      <header className="w-full h-[8vh] bg-gray-700 justify-self-start p-5 flex items-center">
        <span className="text-white lg:text-xl font-bold text-lg">
          git.Search
        </span>
      </header>

      <div className="w-full flex-1 flex justify-center items-center">
        <main className="w-[80%] h-[60%] lg:w-[60%] rounded-md p-5 flex items-center flex-col shadow-sm">
          <div className="w-full h-10 flex items-center">
            <SearchInput
              data-testid="search-input-component"
              onChange={(event) =>
                setGithubUsernameToSearch(event.target.value)
              }
              value={githubUsernameToSearch}
            />
            <div className="flex-1">
            <SearchButton
              data-testid="search-button-component"
              onClick={() =>
                handleSearchUser(githubUsernameToSearch, setGithubProfileData)
              }
              />
              </div>
          </div>
          <div className="w-full h-[350px] bg-gray-800 rounded-md p-5 flex justify-center items-center">
            <GettedGitHubProfile
              data-testid="getted-github-profile-component"
              profileData={githubProfileData}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
