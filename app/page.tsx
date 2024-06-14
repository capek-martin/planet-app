"use client";
import React, { useEffect, useState } from "react";
import { usePlanets } from "./contexts/planetContext";
import { Aside } from "./components/aside";
import { Content } from "./components/content";
import { MainContainer } from "./components/mainContainer";
import { Planet } from "./types/planet.types";
import { Loader } from "./components/loader";
import { NotifyMessage } from "./components/notifyMessage";
import { useLoading } from "./contexts/loadingContext";

const Home = () => {
  const { planetList } = usePlanets();
  const { isError } = useLoading();
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planetList[0]);

  useEffect(() => {
    setSelectedPlanet(planetList[0]);
  }, [planetList]);

  return (
    <MainContainer>
      {!selectedPlanet ? (
        <Loader />
      ) : isError ? (
        <NotifyMessage type="error">
          Network issue, please refresh the page
        </NotifyMessage>
      ) : (
        <>
          <Aside
            selectedPlanet={selectedPlanet}
            setSelectedPlanet={setSelectedPlanet}
          />
          <Content selectedPlanet={selectedPlanet} />
        </>
      )}
    </MainContainer>
  );
};

export default Home;
