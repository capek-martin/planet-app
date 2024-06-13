import styled from "styled-components";
import { InfoPanel } from "./infoPanel";
import { TabContainer } from "./tabContainer";
import { Planet } from "../types/planet.types";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Panel = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  padding-bottom: 0.5rem;
  display: block;
`;

interface Props {
  selectedPlanet: Planet;
}

export const Content = ({ selectedPlanet }: Props) => {
  return (
    <>
      <ContentContainer>
        <Panel>
          <InfoPanel selectedPlanet={selectedPlanet} />
        </Panel>
        <Panel>
          <TabContainer selectedPlanet={selectedPlanet} />
        </Panel>
      </ContentContainer>
    </>
  );
};
