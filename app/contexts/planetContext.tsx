"use client";
import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  ReactNode,
  useCallback,
} from "react";
import { Planet } from "../types/planet.types";
import { toast } from "react-toastify";
import { useLoading } from "./loadingContext";

interface PlanetContextType {
  planetList: Planet[];
  currentPage: number;
  next: string | null;
  previous: string | null;
  refresh: (url?: string) => void;
}

const PlanetContext = createContext<PlanetContextType>({
  planetList: [],
  currentPage: 1,
  next: null,
  previous: null,
  refresh: () => {},
});

interface Props {
  children: ReactNode;
}

export const PlanetProvider = ({ children }: Props) => {
  const apiUrl = "https://swapi.dev/api/planets";
  const { startLoading, stopLoading, setIsError } = useLoading();
  const [planetList, setPlanetList] = useState<Planet[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getPageNumber = (url: string | null) => {
    if (!url || !url.split("?page=")[1]) return 1;
    return parseInt(url.split("?page=")[1]);
  };

  const getPlanetList = useCallback(
    async (url: string = apiUrl) => {
      startLoading();
      try {
        const res = await fetch(url);
        if (!res.ok) {
          toast.error("Network error");
          setIsError();
        }
        const data = await res.json();
        setPlanetList(data.results);
        setNext(data.next);
        setPrevious(data.previous);
        setCurrentPage(getPageNumber(url));
      } catch (err) {
        toast.error("Network error");
        setIsError();
      } finally {
        stopLoading();
      }
    },
    [apiUrl]
  );

  useEffect(() => {
    getPlanetList();
  }, [getPlanetList]);

  const refresh = (url?: string) => {
    getPlanetList(url ? url : `${apiUrl}`);
  };

  return (
    <PlanetContext.Provider
      value={{
        planetList,
        currentPage,
        next,
        previous,
        refresh,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};

export const usePlanets = () => useContext(PlanetContext);
