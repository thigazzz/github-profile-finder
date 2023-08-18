import { render } from "@testing-library/react";
import { Profile } from "../../../interfaces/Profile";
import { MakeRenderContextComponent, makeMockGithubProfileData } from "./factory/maker";

describe("Getted Git Hub Profile", () => {
  let mockGithubProfileData: Profile;
  beforeAll(() => {
    mockGithubProfileData = makeMockGithubProfileData();
  });

  it("should get the github profile data and set on fields", () => {
    const { getByText, getAllByTestId, getByTestId } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
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
    const { getByTestId } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
    );

    expect(getByTestId("github-profile-image-element")).toBeInTheDocument();
    expect(getByTestId("github-profile-image-element")).toHaveAttribute(
      "alt",
      "github-profile-image"
    );
  });
  it("should have a div for github user name, and sub divs: username, bio", () => {
    const { getByTestId } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
    );

    expect(getByTestId("github-profile-name-element")).toBeInTheDocument();
    expect(getByTestId("github-profile-username-element")).toBeInTheDocument();
    expect(getByTestId("github-profile-bio-element")).toBeInTheDocument();
  });
  it("should have a div for github user languages, with maximum 3 languages", () => {
    const { getByTestId } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
    );

    expect(
      getByTestId("github-profile-languages-title-element")
    ).toBeInTheDocument();
    expect(
      getByTestId("github-profile-languages-element").childElementCount
    ).toBe(3);
  });
  it("should have a followers section", () => {
    const { getByText } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
    );

    expect(getByText(/seguidores/i)).toBeInTheDocument();
  });
  it("should have a following section", () => {
    const { getByText } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
    );

    expect(getByText(/seguindo/i)).toBeInTheDocument();
  });
  it("should have a repositories section", () => {
    const { getByText } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
    );

    expect(getByText(/repositórios/i)).toBeInTheDocument();
  });
  it("should have a stars section", () => {
    const { getByText } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={false}
      />
    );

    expect(getByText(/estrelas/i)).toBeInTheDocument();
  });
  it("should render a loading when the informations not finish yet", () => {
    const { getByTestId } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={mockGithubProfileData}
        errorMessage={null}
        isLoading={true}
      />
    );

    expect(getByTestId("loading-component")).toBeInTheDocument();
  });
  it("should render a div with message: user not found", () => {
    const { getByText } = render(
      <MakeRenderContextComponent
        mockGithubProfileData={null}
        errorMessage={{ message: "User not found" }}
        isLoading={true}
      />
    );

    expect(getByText(/user not found/i)).toBeInTheDocument();
  });
});
