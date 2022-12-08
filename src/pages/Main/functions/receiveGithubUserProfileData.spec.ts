import { receiveGithubUserProfileData } from "./receiveGithubUserProfileData";
import { githubApi } from "../../../services/githubApi";

jest.mock('../../../services/githubApi')

const mockedGithubApi = githubApi as jest.Mocked<typeof githubApi>

describe("Received Github User Profile", () => {
  it("should return an object with model: {login; name; avatar_url; bio;public_repos;followers; following;}", async () => {
    mockedGithubApi.get.mockResolvedValueOnce({data: {
        login: 'any_login',
        name: 'any_name',
        avatar_url: 'any_url',
        bio: 'any_bio',
        public_repos: 10,
        followers: 10,
        following: 10
    }}).mockResolvedValueOnce({data: [
        {language: 'Typescript'},
        {language: 'PHP'},
        {language: 'Haskell'}
    ]}).mockResolvedValueOnce({data: [
        {any: 'any'},
        {any: 'any'},
        {any: 'any'},
    ]})
    const sut = await receiveGithubUserProfileData("any_username");
    const mockReturnGithubUsernameData = {
      name: "any_name",
      username: "any_login",
      avatar_url: "any_url",
      biography: "any_bio",
      languages: ["Typescript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 3,
    };

    expect(sut).toEqual(mockReturnGithubUsernameData);
  });
});
