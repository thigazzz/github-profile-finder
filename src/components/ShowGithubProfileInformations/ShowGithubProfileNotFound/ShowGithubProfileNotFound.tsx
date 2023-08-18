import {ShowGithubProfileNotFoundProps} from '../interfaces_props/ShowGithubProfileNotFoundProps'

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