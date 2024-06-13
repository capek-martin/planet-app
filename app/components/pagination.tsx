import styled from "styled-components";
import { AiOutlineReload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { usePlanets } from "../contexts/planetContext";

const StyledPaginatorContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.3rem;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  align-items: center;
`;

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledBtnNoIcon = styled.button`
  height: 29px;
  width: 29px;
  font-weight: bold;
`;

export const Paginator = () => {
  const { currentPage, next, previous, refresh } = usePlanets();

  const handleRefresh = () => {
    refresh();
  };

  const handleNext = () => {
    if (next) refresh(next);
  };

  const handlePrevious = () => {
    if (previous) refresh(previous);
  };

  const iconSize = 25;
  return (
    <StyledPaginatorContainer>
      <StyledBtn onClick={handleRefresh}>
        <AiOutlineReload size={iconSize} />
      </StyledBtn>
      <StyledBtn onClick={handlePrevious} disabled={!previous}>
        <AiOutlineLeft size={iconSize} />
      </StyledBtn>

      <StyledBtnNoIcon> {currentPage ?? 1}</StyledBtnNoIcon>
      <StyledBtn onClick={handleNext} disabled={!next}>
        <AiOutlineRight size={iconSize} />
      </StyledBtn>
    </StyledPaginatorContainer>
  );
};
