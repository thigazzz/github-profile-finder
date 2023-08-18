import { Profile } from "../../../../interfaces/Profile";
import { LoadingContext } from "../../../../contexts/LoadingContext";
import { ShowGithubProfileInformations } from "../../ShowGithubProfileInformations";
import {MakeRenderContextComponentProps} from './interface/MakeRenderContextComponentProps'


export const makeMockGithubProfileData = (): Profile => {
  return {
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
};

export const MakeRenderContextComponent = ({mockGithubProfileData, errorMessage, isLoading}: MakeRenderContextComponentProps) => {
  return (
    <LoadingContext.Provider value={{ loading: isLoading }}>
        <ShowGithubProfileInformations
          profileData={mockGithubProfileData}
          errorMessage={errorMessage}
        />
      </LoadingContext.Provider>
  )
}