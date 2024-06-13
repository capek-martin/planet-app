"use client";
import React, { useEffect, useState } from "react";
import { usePlanets } from "./contexts/planetContext";
import { Aside } from "./components/aside";
import { Content } from "./components/content";
import { MainContainer } from "./components/mainContainer";
import { Planet } from "./types/planet.types";

const Home = () => {
  const { planetList, next, previous, refresh } = usePlanets();
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planetList[0]);

  useEffect(() => {
    // refresh();
    setSelectedPlanet(planetList[0]);
  }, [planetList]);

  if (!selectedPlanet) return "Loader...";
  return (
    <MainContainer>
      <Aside
        selectedPlanet={selectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
      />
      <Content selectedPlanet={selectedPlanet} />
    </MainContainer>
  );
};

export default Home;
