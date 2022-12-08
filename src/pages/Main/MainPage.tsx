import axios from "axios";
import { useState } from "react";
import { GettedGitHubProfile } from "../../components/GettedGitHubProfile/GettedGitHubProfile";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { githubApi } from "../../services/githubApi";

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
    const { data: receivedUsernameProfileData } = await githubApi.get<{
      login: string;
      name: string;
      avatar_url: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
    }>(`users/${username}`);
    console.log(receivedUsernameProfileData);
    const { data: receivedUsernameProgrammingLanguages } = await githubApi.get<
      [{ language: string }]
    >(`users/${username}/repos`);
    console.log(receivedUsernameProgrammingLanguages);
    const { data: receivedUsernameStarred } = await githubApi.get<[]>(
      `users/${username}/repos`
    );
    console.log(receivedUsernameStarred);

    setGithubProfileData({
      name: receivedUsernameProfileData.name,
      username: receivedUsernameProfileData.login,
      avatar_url: receivedUsernameProfileData.avatar_url,
      biography: receivedUsernameProfileData.bio,
      languages: ["Javascript", "PHP", "Haskell"],
      followers: receivedUsernameProfileData.followers,
      following: receivedUsernameProfileData.following,
      repositories: receivedUsernameProfileData.public_repos,
      stars: receivedUsernameStarred.length,
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
