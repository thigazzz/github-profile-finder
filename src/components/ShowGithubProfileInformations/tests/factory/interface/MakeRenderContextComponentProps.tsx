import { ErrorMessage } from "../../../../../interfaces/ErrorMessage";
import { Profile } from "../../../../../interfaces/Profile";

export interface MakeRenderContextComponentProps {
    mockGithubProfileData: Profile | null,
    errorMessage: ErrorMessage | null,
    isLoading: boolean
}