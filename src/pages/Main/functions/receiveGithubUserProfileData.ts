import { githubApi } from "../../../services/githubApi";

export interface GithubUserData {
    name: string,
    username: string,
    avatar_url: string,
    biography: string,
    languages: string[],
    followers: number,
    following: number,
    repositories: number,
    stars: number,
}

export const receiveGithubUserProfileData = async (
  username: string
): Promise<GithubUserData> => {
  const receivedUsernameProfilePromise = githubApi.get<{
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
  }>(`users/${username}`);
  const receivedUsernameProgrammingLanguagesPromise = githubApi.get<
    [{ language: string }]
  >(`users/${username}/repos`);
  const receivedUsernameStarredPromise = githubApi.get<[]>(
    `users/${username}/repos`
  );

  const response = await Promise.all([
    receivedUsernameProfilePromise,
    receivedUsernameProgrammingLanguagesPromise,
    receivedUsernameStarredPromise,
  ]);

  return {
    name: response[0].data.name,
    username: response[0].data.login,
    avatar_url: response[0].data.avatar_url,
    biography: response[0].data.bio,
    languages: ["Javascript", "PHP", "Haskell"],
    followers: response[0].data.followers,
    following: response[0].data.following,
    repositories: response[0].data.public_repos,
    stars: response[2].data.length,
  };
};
