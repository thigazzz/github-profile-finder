import { useContext } from "react";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";

export const LoadingSpinner = () => {
  const { loading } = useContext(LoadingContext) as ILoadingContext;

  if (!loading) return null;

  return <div data-testid="loading">loading</div>;
};
