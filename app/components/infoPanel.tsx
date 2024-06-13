import styled from "styled-components";
import { Planet } from "../types/planet.types";

const InfoContainer = styled.div`
  padding: 0 0.5rem;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  padding-bottom: 0.5rem;
`;

const Attribute = styled.div`
  strong {
    font-weight: bold;
    margin-right: 5px;
  }

  span {
    font-weight: normal;
  }
`;

interface Props {
  selectedPlanet: Planet;
}

export const InfoPanel = ({ selectedPlanet }: Props) => (
  <InfoContainer>
    <StyledH2>{selectedPlanet.name}</StyledH2>
    <Attribute>
      <strong>Climate:</strong> <span>{selectedPlanet.climate}</span>
    </Attribute>
    <Attribute>
      <strong>Terrain:</strong> <span>{selectedPlanet.terrain}</span>
    </Attribute>
    <Attribute>
      <strong>Diameter:</strong> <span>{selectedPlanet.diameter}</span>
    </Attribute>
    <Attribute>
      <strong>Gravity:</strong> <span>{selectedPlanet.gravity}</span>
    </Attribute>
    <Attribute>
      <strong>Orbital Period:</strong>{" "}
      <span>{selectedPlanet.orbital_period}</span>
    </Attribute>
    <Attribute>
      <strong>Rotation Period:</strong>{" "}
      <span>{selectedPlanet.rotation_period}</span>
    </Attribute>
    <Attribute>
      <strong>Population:</strong> <span>{selectedPlanet.population}</span>
    </Attribute>
    <Attribute>
      <strong>Surface Water:</strong>{" "}
      <span>{selectedPlanet.surface_water}</span>
    </Attribute>
    {/* <Attribute>
          <strong>Created:</strong> <span>{selectedPlanet.created}</span>
        </Attribute> */}
    {/* <Attribute>
          <strong>Edited:</strong> <span>{selectedPlanet.edited}</span>
        </Attribute> */}
  </InfoContainer>
);
