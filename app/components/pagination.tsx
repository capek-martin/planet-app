import styled from "styled-components";
import { AiOutlineReload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { usePlanets } from "../contexts/planetContext";

const StyledPaginatorContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.2rem;
  padding: 0.2rem 0;
  margin: 0.2rem 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Paginator = () => {
  const { next, previous, refresh } = usePlanets();

  const handleRefresh = () => {
    refresh();
  };

  const handleNext = () => {
    if (next) refresh(next);
  };

  const handlePrevious = () => {
    if (previous) refresh(previous);
  };

  const iconSize = 15;

  return (
    <StyledPaginatorContainer>
      <StyledBtn onClick={handleRefresh}>
        <AiOutlineReload size={iconSize} />
      </StyledBtn>
      <StyledBtn onClick={handlePrevious} disabled={!previous}>
        <AiOutlineLeft size={iconSize} />
      </StyledBtn>
      <StyledBtn onClick={handleNext} disabled={!next}>
        <AiOutlineRight size={iconSize} />
      </StyledBtn>
    </StyledPaginatorContainer>
  );
};
