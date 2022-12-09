import React, { SetStateAction } from "react";
import {
  GithubUserData,
  receiveGithubUserProfileData,
} from "../functions/receiveGithubUserProfileData";

export const handleSearchUser = async (
  username: string,
  setState: React.Dispatch<SetStateAction<GithubUserData | undefined>>,
  setLoading: React.Dispatch<SetStateAction<boolean>> | undefined
) => {
  setLoading?.(true)

  const {githubData, message} = await receiveGithubUserProfileData(
    username
  );

  setState({
    name: String(githubData?.name),
    username: String(githubData?.username),
    avatar_url: String(githubData?.avatar_url),
    biography: String(githubData?.biography),
    languages: githubData?.languages as string[],
    followers: Number(githubData?.followers),
    following: Number(githubData?.following),
    repositories: Number(githubData?.repositories),
    stars: Number(githubData?.stars),
  });

  setLoading?.(false)
};
