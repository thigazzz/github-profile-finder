import React, { useState } from "react";
import { GettedGitHubProfile } from "../../components/GettedGitHubProfile/GettedGitHubProfile";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { GithubUserData } from "./functions/receiveGithubUserProfileData";
import { handleSearchUser } from "./handles/handleSearchUser";

export const MainPage = ({...rest}: React.HTMLAttributes<HTMLDivElement>) => {
  const [githubUsernameToSearch, setGithubUsernameToSearch] = useState("");
  const [githubProfileData, setGithubProfileData] = useState<
    GithubUserData | undefined
  >(undefined);

  return (
    <div {...rest}>
      <header>
        <span>GitSearch</span>
      </header>
      <SearchInput
        data-testid="search-input-component"
        onChange={(event) => setGithubUsernameToSearch(event.target.value)}
        value={githubUsernameToSearch}
      />
      <SearchButton
        data-testid="search-button-component"
        onClick={() =>
          handleSearchUser(githubUsernameToSearch, setGithubProfileData)
        }
      />
      <GettedGitHubProfile
        data-testid="getted-github-profile-component"
        profileData={githubProfileData}
      />
    </div>
  );
};
