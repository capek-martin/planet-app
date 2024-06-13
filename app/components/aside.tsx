import styled from "styled-components";
import { usePlanets } from "../contexts/planetContext";
import { Paginator } from "./pagination";
import { Planet } from "../types/planet.types";
import { Dispatch, SetStateAction } from "react";

const StyledAside = styled.aside`
  width: 24rem;
  padding: 0.5rem;
  border-right: 1px solid var(--border-color);
`;

const StyledUl = styled.ul`
  margin: 0;
  list-style-type: none;
`;

interface StyledLiProps {
  selected: boolean;
}

const StyledLi = styled.li<StyledLiProps>`
  font-size: 1.5rem;
  padding: 0.2rem;
  list-style-type: none;
  font-weight: ${(props) => (props.selected ? "700" : "400")};
  background-color: ${(props) =>
    props.selected ? "var(--hover-color)" : "transparent"};
  &:hover {
    cursor: pointer;
    background-color: var(--hover-color);
  }
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
`;

interface Props {
  selectedPlanet: Planet;
  setSelectedPlanet: Dispatch<SetStateAction<Planet>>;
}

export const Aside = ({ selectedPlanet, setSelectedPlanet }: Props) => {
  const { planetList } = usePlanets();

  const handleSelectPlanet = (index: number) => {
    if (!planetList) return;
    setSelectedPlanet(planetList[index]);
  };

  return (
    <StyledAside>
      <StyledH1>Planet explorer</StyledH1>
      <Paginator />
      <StyledUl>
        {planetList.map((planet, i) => (
          <StyledLi
            key={i}
            onClick={() => handleSelectPlanet(i)}
            selected={planet.name === selectedPlanet.name}
          >
            {planet.name}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledAside>
  );
};
