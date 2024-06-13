import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 70%;
  min-height: 80vh;
  background-color: var(--panel-bg-color);
  border-radius: 0.5rem;
`;

interface Props {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};
