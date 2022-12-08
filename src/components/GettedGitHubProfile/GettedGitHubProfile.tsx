import { useContext } from "react";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

interface GettedGitHubProfileProps
  extends React.SelectHTMLAttributes<HTMLDivElement> {
  profileData?: {
    name: string;
    username: string;
    avatar_url: string;
    biography: string;
    languages: string[];
    followers: number;
    following: number;
    repositories: number;
    stars: number;
  };
}

export const GettedGitHubProfile = ({
  profileData,
  ...rest
}: GettedGitHubProfileProps) => {
  const { loading } = useContext(LoadingContext) as ILoadingContext;

  return (
    <section
      {...rest}
      className="w-full h-full flex justify-between sm:justify-center sm:items-center text-gray-200 flex-col sm:flex-row"
    >
      {profileData ? (
        <>
          {!loading ? (
            <>
              <div className="sm:h-full w-[25%] lg:w-[15%]">
                <div className="sm:self-start  h-30 w-30 md:h-20 md:w-20 rounded-full overflow-hidden mr-4">
                  <img
                    src={profileData?.avatar_url}
                    alt="github-profile-image"
                    data-testid="github-profile-image-element"
                    className="h-full w-full bg-contain bg-center"
                  />
                </div>
              </div>
              <div className="sm:h-full w-full sm:w-[25%] lg:w-[35%]  flex flex-col">
                <h1
                  data-testid="github-profile-name-element"
                  className="font-bold text-sm md:text-sm lg:text-xl"
                >
                  {profileData?.name}
                  <br />
                  <span
                    data-testid="github-profile-username-element"
                    className="text-[14px] font-light md:text-[16px]"
                  >
                    {profileData?.username}
                  </span>
                </h1>
                <div className="mt-2 text-xs md:text-xs">
                  <p data-testid="github-profile-bio-element">
                    {profileData?.biography}
                  </p>
                </div>
              </div>
              <div className="sm:h-full w-full sm:w-[25%]  flex flex-col sm:ml-5">
                <h3
                  data-testid="github-profile-languages-title-element"
                  className="font-bold text-sm md:text-sm lg:text-xl"
                >
                  Linguagens
                </h3>
                <ul data-testid="github-profile-languages-element" className="">
                  {profileData?.languages.map((language) => (
                    <li key={language} className="mt-2 text-xs md:text-sm">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:h-full w-full sm:w-[25%] flex flex-col justify-between ">
                <div className="flex items-center">
                  <span className="mt-2 text-xs md:text-sm font-light">
                    <strong className="font-bold">Seguidores </strong>
                    {profileData?.followers}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mt-2 text-xs md:text-sm font-light">
                    <strong className="font-bold">Seguindo </strong>
                    {profileData?.following}
                  </span>
                </div>
                <div className="flex items-center ">
                  <span className="mt-2 text-xs md:text-sm font-light">
                    <strong className="font-bold"> Repositórios </strong>
                    {profileData?.repositories}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mt-2 text-xs md:text-sm font-light">
                    <strong className="font-bold">Estrelas </strong>
                    {profileData?.stars}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <LoadingSpinner data-testid="loading-component" />
            </div>
          )}
        </>
      ) : (
        <div>no user</div>
      )}
    </section>
  );
};
