import React, { SetStateAction } from "react";
import {
  receiveGithubUserProfileData,
} from "../functions/receiveGithubUserProfileData";
import { Profile } from "../../../interfaces/Profile";

export const handleSearchUser = async (
  username: string,
  setState: React.Dispatch<
    SetStateAction<{
      githubUserData: Profile | null;
      errorMessage: {
        message: string;
      } | null;
    }>
  >,
  setLoading: React.Dispatch<SetStateAction<boolean>> | undefined
) => {
  setLoading?.(true);

  const { githubData, message } = await receiveGithubUserProfileData(username);

  if (message) {
    setState({
      githubUserData: null,
      errorMessage: {
        message: message,
      },
    });

    setLoading?.(false);

    return
  }

  setState({
    githubUserData: {
      name: String(githubData?.name),
      username: String(githubData?.username),
      avatar_url: String(githubData?.avatar_url),
      biography: githubData?.biography || '',
      languages: githubData?.languages as string[],
      followers: Number(githubData?.followers),
      following: Number(githubData?.following),
      repositories: Number(githubData?.repositories),
      stars: Number(githubData?.stars),
    },
    errorMessage: null,
  });

  setLoading?.(false);
};
