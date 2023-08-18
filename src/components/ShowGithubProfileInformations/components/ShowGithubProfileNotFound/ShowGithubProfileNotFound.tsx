import {ShowGithubProfileNotFoundProps} from './interface/ShowGithubProfileNotFoundProps'

export const ShowGithubProfileNotFound = ({errorMessage}: ShowGithubProfileNotFoundProps) => {
    return (
        <>
        {errorMessage ? (
            <div>{errorMessage.message}</div>
          ) : (
            <div>no user</div>
          )}
        </>
    )
}