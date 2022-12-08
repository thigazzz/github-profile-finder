import { useState } from "react";
import { GettedGitHubProfile } from "../../components/GettedGitHubProfile/GettedGitHubProfile";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { handleSearchUser } from "./handles/handleSearchUser";

export const MainPage = () => {
  const [githubUsernameToSearch, setGithubUsernameToSearch] = useState("");
  const [githubProfileData, setGithubProfileData] = useState<
    | {
        name: string;
        username: string;
        avatar_url: string;
        biography: string;
        languages: string[];
        followers: number;
        following: number;
        repositories: number;
        stars: number;
      }
    | undefined
  >(undefined);

  return (
    <div>
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
        onClick={() => handleSearchUser(githubUsernameToSearch, setGithubProfileData)}
      />
      <GettedGitHubProfile
        data-testid="getted-github-profile-component"
        profileData={githubProfileData}
      />
    </div>
  );
};
