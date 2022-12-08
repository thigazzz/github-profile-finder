import React, { useContext } from "react";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";

export const LoadingSpinner = ({...rest}: React.HTMLAttributes<HTMLDivElement>) => {
  const { loading } = useContext(LoadingContext) as ILoadingContext;

  if (!loading) return null;

  return <div data-testid="loading" {...rest}>loading</div>;
};
