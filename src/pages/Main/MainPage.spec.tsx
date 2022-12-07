import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { GettedGitHubProfile } from "../../components/GettedGitHubProfile/GettedGitHubProfile";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { SearchInput } from "../../components/SearchInput/SearchInput";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const MainPage = () => {
  return (
    <div>
      <header>
        <span>GitSearch</span>
      </header>
      <SearchInput data-testid="search-input-component" />
      <SearchButton data-testid="search-button-component" />
      <GettedGitHubProfile data-testid="getted-github-profile-component" />
    </div>
  );
};

describe("Main Page", () => {
  it("should show a github user profile when user type in input and click to search", async () => {
    const { getByTestId } = render(<MainPage />);
    mockedAxios.get.mockResolvedValue({
      data: {
        name: "Thiago",
        username: "thigaz",
        avatar_url: "ant_avatar",
        biography: "any_bio",
        languages: ["Javascript", "PHP", "Haskell"],
        followers: 10,
        following: 10,
        repositories: 10,
        stars: 10,
      },
    });

    await userEvent.type(getByTestId("search-input-component"), "any_user");
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
