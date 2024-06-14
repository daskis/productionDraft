import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface LoadingContextProps {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const value = { loading, setLoading };
    return (
        <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within LoadingProvider');
    }
    return context;
};
