import axios from "axios";
import { useState } from "react";
import { GettedGitHubProfile } from "../../components/GettedGitHubProfile/GettedGitHubProfile";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { githubApi } from "../../services/githubApi";
import { receiveGithubUserProfileData } from "./functions/receiveGithubUserProfileData";

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

  const handleSearchUser = async (username: string) => {
    const receivedUsernameProfileData = await receiveGithubUserProfileData(username)

    setGithubProfileData({
      name: receivedUsernameProfileData.name,
      username: receivedUsernameProfileData.username,
      avatar_url: receivedUsernameProfileData.avatar_url,
      biography: receivedUsernameProfileData.biography,
      languages: ["Javascript", "PHP", "Haskell"],
      followers: receivedUsernameProfileData.followers,
      following: receivedUsernameProfileData.following,
      repositories: receivedUsernameProfileData.repositories,
      stars: receivedUsernameProfileData.stars,
    });
  };

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
        onClick={() => handleSearchUser(githubUsernameToSearch)}
      />
      <GettedGitHubProfile
        data-testid="getted-github-profile-component"
        profileData={githubProfileData}
      />
    </div>
  );
};
