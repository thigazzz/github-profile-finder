import React, { SetStateAction } from "react";
import { GithubUserData, receiveGithubUserProfileData } from "../functions/receiveGithubUserProfileData";

export const handleSearchUser = async (username: string, setState: React.Dispatch<SetStateAction<GithubUserData | undefined>>) => {
    const receivedUsernameProfileData = await receiveGithubUserProfileData(username)

    setState({
      name: receivedUsernameProfileData.name,
      username: receivedUsernameProfileData.username,
      avatar_url: receivedUsernameProfileData.avatar_url,
      biography: receivedUsernameProfileData.biography,
      languages: receivedUsernameProfileData.languages,
      followers: receivedUsernameProfileData.followers,
      following: receivedUsernameProfileData.following,
      repositories: receivedUsernameProfileData.repositories,
      stars: receivedUsernameProfileData.stars,
    });
  };