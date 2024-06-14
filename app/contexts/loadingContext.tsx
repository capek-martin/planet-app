"use client";
import { createContext, useState, useContext } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  isError: boolean;
  setIsError: () => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  const setIsError = () => setError(true);

  return (
    <LoadingContext.Provider
      value={{ isLoading, startLoading, stopLoading, setIsError, isError }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export { LoadingProvider, useLoading };
