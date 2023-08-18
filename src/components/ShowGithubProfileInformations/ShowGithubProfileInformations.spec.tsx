import { render } from "@testing-library/react";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ShowGithubProfileInformations } from "./ShowGithubProfileInformations";

describe("Getted Git Hub Profile", () => {
  it("should get the github profile data and set on fields", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByText, getAllByTestId, getByTestId } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByText(/Thiago/i)).toBeInTheDocument();
    expect(getByText(/thigaz/i)).toBeInTheDocument();
    expect(getByText(/any_bio/i)).toBeInTheDocument();
    expect(getByTestId("github-profile-image-element")).toHaveAttribute(
      "src",
      mockGithubProfileData.avatar_url
    );
    getAllByTestId("github-profile-languages-element").map((language) =>
      expect(language).toBeInTheDocument()
    );
    expect(getByText(`Seguidores`)).toBeInTheDocument();
    expect(getByText(`Seguindo`)).toBeInTheDocument();
    expect(getByText(`Repositórios`)).toBeInTheDocument();
    expect(getByText(`Estrelas`)).toBeInTheDocument();
  });

  it("should have a image element to github profile", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByTestId } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByTestId("github-profile-image-element")).toBeInTheDocument();
    expect(getByTestId("github-profile-image-element")).toHaveAttribute(
      "alt",
      "github-profile-image"
    );
  });
  it("should have a div for github user name, and sub divs: username, bio", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByTestId } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByTestId("github-profile-name-element")).toBeInTheDocument();
    expect(getByTestId("github-profile-username-element")).toBeInTheDocument();
    expect(getByTestId("github-profile-bio-element")).toBeInTheDocument();
  });
  it("should have a div for github user languages, with maximum 3 languages", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByTestId } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(
      getByTestId("github-profile-languages-title-element")
    ).toBeInTheDocument();
    expect(
      getByTestId("github-profile-languages-element").childElementCount
    ).toBe(3);
  });
  it("should have a followers section", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByText } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByText(/seguidores/i)).toBeInTheDocument();
  });
  it("should have a following section", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByText } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByText(/seguindo/i)).toBeInTheDocument();
  });
  it("should have a repositories section", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByText } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByText(/repositórios/i)).toBeInTheDocument();
  });
  it("should have a stars section", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByText } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByText(/estrelas/i)).toBeInTheDocument();
  });
  it("should render a loading when the informations not finish yet", () => {
    const mockGithubProfileData = {
      name: "Thiago",
      username: "thigaz",
      avatar_url: "ant_avatar",
      biography: "any_bio",
      languages: ["Javascript", "PHP", "Haskell"],
      followers: 10,
      following: 10,
      repositories: 10,
      stars: 10,
    };
    const { getByTestId } = render(
      <LoadingContext.Provider value={{ loading: true }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByTestId("loading-component")).toBeInTheDocument();
  });
  it("should render a div with message: user not found", () => {
    const { getByText } = render(
      <LoadingContext.Provider value={{ loading: true }}>
        <ShowGithubProfileInformations
          errorMessage={{ message: "User not found" }}
          profileData={null}
        />
      </LoadingContext.Provider>
    );

    expect(getByText(/user not found/i)).toBeInTheDocument();
  });
});
