import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { Resident } from "../types/resident.types";
import { Planet } from "../types/planet.types";
import { Film } from "../types/film.types";
import { useLoading } from "../contexts/loadingContext";
import { ResidentDetail } from "./residentDetail";
import { FilmDetail } from "./filmDetail";
import { Loader } from "./loader";
import { toast } from "react-toastify";

const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`;

const TabHeader = styled.div`
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
  display: flex;
`;

const Panel = styled.div``;

interface StyledTabProps {
  $active: boolean;
}

const Tab = styled.div<StyledTabProps>`
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#ccc" : "#f0f0f0")};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border: 1px solid var(--border-color);
  border-bottom: none;
`;

const StyledUl = styled.ul`
  margin: 0;
  list-style-type: none;

  span {
    font-size: 1.5rem;
  }
`;

const StyledLi = styled.li<StyledTabProps>`
  padding: 0.1rem 0.3rem;
  font-size: 1.5rem;
  margin: 0;
  list-style-type: none;
  background-color: ${({ $active }) => ($active ? "#ccc" : "#f0f0f0")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  &:hover {
    cursor: pointer;
    background-color: var(--hover-color);
  }
`;

enum Tabs {
  RESIDENTS = "Residents",
  FILMS = "Films",
}

interface Props {
  selectedPlanet: Planet;
}

export const TabContainer = ({ selectedPlanet }: Props) => {
  const { startLoading, stopLoading, isLoading, setIsError } = useLoading();

  const [activeTab, setActiveTab] = useState(Tabs.RESIDENTS);
  const [residents, setResidents] = useState<Resident[]>([]);
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedResident, setSelectedResident] = useState<string | null>(null);
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);

  const fetchResidents = useCallback(async () => {
    startLoading();
    try {
      const residentsData = await Promise.all(
        selectedPlanet.residents.map(async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        })
      );
      setResidents(residentsData);
    } catch (error) {
      toast.error("Error");
      setIsError();
    } finally {
      stopLoading();
    }
  }, [selectedPlanet]);

  const fetchFilms = useCallback(async () => {
    startLoading();
    try {
      const filmsData = await Promise.all(
        selectedPlanet.films.map(async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        })
      );
      setFilms(filmsData);
    } catch (error) {
      toast.error("Error");
      setIsError();
    } finally {
      stopLoading();
    }
  }, [selectedPlanet]);

  useEffect(() => {
    if (activeTab === Tabs.RESIDENTS) fetchResidents();
    if (activeTab === Tabs.FILMS) fetchFilms();
  }, [selectedPlanet, activeTab, fetchResidents, fetchFilms]);

  const ResidentsTab = () => (
    <StyledUl>
      {residents.length === 0 ? (
        <span>No known residents</span>
      ) : (
        residents.map((resident, index) => (
          <StyledLi
            key={index}
            $active={selectedResident === resident.url}
            onClick={() =>
              setSelectedResident(
                selectedResident === resident.url ? null : resident.url
              )
            }
          >
            <>
              {resident.name}
              {selectedResident === resident.url && (
                <ResidentDetail resident={resident} />
              )}
            </>
          </StyledLi>
        ))
      )}
    </StyledUl>
  );

  const FilmsTab = () => (
    <StyledUl>
      {films.length === 0 ? (
        <span>Not seen in any film.</span>
      ) : (
        films.map((film, index) => (
          <StyledLi
            key={index}
            $active={selectedFilm === film.url}
            onClick={() =>
              setSelectedFilm(selectedFilm === film.url ? null : film.url)
            }
          >
            <>
              {film.title}
              {selectedFilm === film.url && <FilmDetail film={film} />}
            </>
          </StyledLi>
        ))
      )}
    </StyledUl>
  );

  if (!activeTab) return <Loader />;
  return (
    <StyledTabContainer>
      <TabHeader>
        <Tab
          $active={activeTab === Tabs.RESIDENTS}
          onClick={() => !isLoading && setActiveTab(Tabs.RESIDENTS)}
        >
          Residents
        </Tab>
        <Tab
          $active={activeTab === Tabs.FILMS}
          onClick={() => !isLoading && setActiveTab(Tabs.FILMS)}
        >
          Films
        </Tab>
      </TabHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Panel
            style={{ display: activeTab === Tabs.RESIDENTS ? "block" : "none" }}
          >
            {ResidentsTab()}
          </Panel>
          <Panel
            style={{ display: activeTab === Tabs.FILMS ? "block" : "none" }}
          >
            {FilmsTab()}
          </Panel>
        </>
      )}
    </StyledTabContainer>
  );
};
