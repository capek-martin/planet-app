import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 70%;
  min-height: 70vh;
  background-color: #eee;
  border-radius: 0.2rem;
`;

interface Props {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};
