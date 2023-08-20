import { LoadingContext } from "../../../../contexts/LoadingContext"
import { LoadingSpinner } from "../../LoadingSpinner"

export const MakeRenderContextComponent = ({isLoading}: {isLoading: boolean}) => {
    return (
      <LoadingContext.Provider value={{ loading: isLoading }}>
          <LoadingSpinner />
        </LoadingContext.Provider>
    )
  }