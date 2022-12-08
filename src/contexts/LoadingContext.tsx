import React, { createContext, ReactNode, SetStateAction, useState } from "react";

interface ILoadingContext {
    loading: boolean;
    setLoading: React.Dispatch<SetStateAction<boolean>>
}

export const LoadingContext = createContext<ILoadingContext | null>(null)

export const LoadingProvider = ({children}: {children: ReactNode}) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}