import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { MainPage } from "./MainPage";

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe("Main Page", () => {
  it("should show a github user profile when user type in input and click to search", async () => {
    const { getByTestId, debug } = render(<MainPage />);
    mockedAxios.get.mockResolvedValueOnce({data: {
        login: 'any_login',
        name: 'any_name',
        avatar_url: 'any_url',
        bio: 'any_bio',
        public_repos: 10,
        followers: 10,
        following: 10
    }}).mockResolvedValueOnce({data: [
        {language: 'Typescript'},
        {language: 'Typescript'},
        {language: 'Typescript'}
    ]}).mockResolvedValueOnce({data: [
        {any: 'any'},
        {any: 'any'},
        {any: 'any'},
    ]})

    await userEvent.type(
      getByTestId("search-input-component"),
      "constThiagoSilva"
    );
    await userEvent.click(getByTestId("search-button-component"));

     expect(
       getByTestId("getted-github-profile-component")
     ).not.toHaveTextContent(/no user/i);
  });
  it("should have a SearchButton component", () => {
    const { getByTestId } = render(<MainPage />);

    expect(getByTestId("search-button-component")).toBeInTheDocument();
  });
  it("should have a SearchInput component", () => {
    const { getByTestId } = render(<MainPage />);

    expect(getByTestId("search-input-component")).toBeInTheDocument();
  });
  it("should have a GettedGithubProfile component", () => {
    const { getByTestId } = render(<MainPage />);

    expect(getByTestId("getted-github-profile-component")).toBeInTheDocument();
  });
  it("should have a header component with text: GitSearch", () => {
    const { getByText } = render(<MainPage />);

    expect(getByText("GitSearch")).toBeInTheDocument();
  });
});
