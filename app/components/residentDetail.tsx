import styled from "styled-components";
import { Resident } from "../types/resident.types";

const DetailContainer = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 0.5rem;

  span {
    font-weight: normal;
  }
`;

interface Props {
  resident: Resident;
}

export const ResidentDetail = ({ resident }: Props) => {
  return (
    <DetailContainer>
      <p>
        <strong>Height:</strong> <span>{resident.height}</span>
      </p>
      <p>
        <strong>Mass:</strong> <span>{resident.mass}</span>
      </p>
      <p>
        <strong>Hair Color:</strong> <span>{resident.hair_color}</span>
      </p>
      <p>
        <strong>Skin Color:</strong> <span>{resident.skin_color}</span>
      </p>
      <p>
        <strong>Eye Color:</strong> <span>{resident.eye_color}</span>
      </p>
      <p>
        <strong>Birth Year:</strong> <span>{resident.birth_year}</span>
      </p>
      <p>
        <strong>Gender:</strong> <span>{resident.gender}</span>
      </p>
    </DetailContainer>
  );
};
