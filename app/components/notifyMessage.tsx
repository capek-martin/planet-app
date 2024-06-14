import styled from "styled-components";

type MessageType = "success" | "error" | "info";

const StyledMessage = styled.h3<{ $type: MessageType }>`
  background-color: ${({ $type }) => {
    switch ($type) {
      case "success":
        return "#d4edda";
      case "error":
        return "#f8d7da";
      case "info":
        return "#d1ecf1";
      default:
        return "#f0f0f0";
    }
  }};
  color: ${({ $type }) => {
    switch ($type) {
      case "success":
        return "#155724";
      case "error":
        return "#721c24";
      case "info":
        return "#0c5460";
      default:
        return "#000";
    }
  }};
  padding: 1rem;
  border-radius: 1rem;
`;

const StyledMessageContainer = styled.div`
  margin: 2rem auto;
`;

interface Props {
  type: MessageType;
  children: React.ReactNode;
}

export const NotifyMessage = ({ type, children }: Props) => {
  return (
    <StyledMessageContainer>
      <StyledMessage $type={type}>{children}</StyledMessage>
    </StyledMessageContainer>
  );
};
