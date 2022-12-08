import React, { useContext } from "react";
import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";

export const LoadingSpinner = ({...rest}: React.HTMLAttributes<HTMLDivElement>) => {
  const { loading } = useContext(LoadingContext) as ILoadingContext;

  if (!loading) return null;

  return <div data-testid="loading" {...rest} className='border-[8px] border-gray-500  border-t-[8px] border-t-green-400 rounded-full w-[80px] h-[80px] animate-spin '></div>;
};
