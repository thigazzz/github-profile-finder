import { useContext } from "react";
import {GettedGitHubProfileProps} from './interface/ShowGithubProfileInformationsProps'
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { GithubInformations } from "./components/GithubInformations/GithubInformations";
import { ShowGithubProfileNotFound } from "./components/ShowGithubProfileNotFound/ShowGithubProfileNotFound";

export const ShowGithubProfileInformations = ({
  profileData,
  errorMessage,
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
              <GithubInformations profileData={profileData}/>
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <LoadingSpinner data-testid="loading-component" />
            </div>
          )}
        </>
      ) : (
        <>
          <ShowGithubProfileNotFound errorMessage={errorMessage}/>
        </>
      )}
    </section>
  );
};
