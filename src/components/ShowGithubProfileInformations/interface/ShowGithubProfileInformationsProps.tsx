import {Profile} from '../../../interfaces/Profile'
import {ErrorMessage} from '../../../interfaces/ErrorMessage'

export interface GettedGitHubProfileProps
  extends React.SelectHTMLAttributes<HTMLDivElement> {
  profileData: Profile | null;
  errorMessage: ErrorMessage | null;
}