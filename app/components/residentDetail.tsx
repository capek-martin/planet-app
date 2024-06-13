import styled from "styled-components";
import { Resident } from "../types/resident.types";

const DetailContainer = styled.div`
  width: 100%;
  font-size: 0.5rem;
  margin-top: 0.5rem;
`;

interface Props {
  resident: Resident;
}

export const ResidentDetail = ({ resident }: Props) => {
  return (
    <DetailContainer>
      <p>
        <strong>Height:</strong> {resident.height}
      </p>
      <p>
        <strong>Mass:</strong> {resident.mass}
      </p>
      <p>
        <strong>Hair Color:</strong> {resident.hair_color}
      </p>
      <p>
        <strong>Skin Color:</strong> {resident.skin_color}
      </p>
      <p>
        <strong>Eye Color:</strong> {resident.eye_color}
      </p>
      <p>
        <strong>Birth Year:</strong> {resident.birth_year}
      </p>
      <p>
        <strong>Gender:</strong> {resident.gender}
      </p>
    </DetailContainer>
  );
};
