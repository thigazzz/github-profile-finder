import axios, { AxiosError } from "axios";
import { githubApi } from "../../../services/githubApi";
import { setMostUsedProgrammingLanguages } from "../utils/setMostUsedProgrammingLanguages";
import { Profile } from "../../../interfaces/Profile";

export const receiveGithubUserProfileData = async (
  username: string
): Promise<{ githubData: Profile | null; message: string | null }> => {
  try {
    const receivedUsernameProfilePromise = await githubApi.get<{
      login: string;
      name: string;
      avatar_url: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
      message?: string;
    }>(`users/${username}`);

    const receivedUsernameProgrammingLanguagesPromise = githubApi.get(`users/${username}/repos`);
    const receivedUsernameStarredPromise = githubApi.get<[]>(
      `users/${username}/repos`
    );

    const response = await Promise.all([
      receivedUsernameProgrammingLanguagesPromise,
      receivedUsernameStarredPromise,
    ]);

    const test = response[0].data.map((algo: any) => {
      return algo.language})
    const test2 = test.filter((algo: string | null) => {return !algo ? false : {language: algo}})
    const test3: {language: string}[] = test2.map((algo:string) => {return {language: algo}})

    return {
      githubData: {
        name: receivedUsernameProfilePromise.data.name,
        username: receivedUsernameProfilePromise.data.login,
        avatar_url: receivedUsernameProfilePromise.data.avatar_url,
        biography: receivedUsernameProfilePromise.data.bio,
        languages: setMostUsedProgrammingLanguages(test3),
        followers: receivedUsernameProfilePromise.data.followers,
        following: receivedUsernameProfilePromise.data.following,
        repositories: receivedUsernameProfilePromise.data.public_repos,
        stars: response[1].data.length,
      },
      message: null,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('bbbb')

      return {
        githubData: null,
        message: error.response?.data.message,
      };
    }

    console.log(error)

    return {
      githubData: null,
      message: '',
    };
  }
};
