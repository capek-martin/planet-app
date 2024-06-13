import styled from "styled-components";
import { Film } from "../types/film.types";

const DetailContainer = styled.div`
  width: 100%;
  max-width: 400px;
  font-size: 0.4rem;
  margin-top: 0.5rem;
`;

interface Props {
  film: Film;
}

export const FilmDetail = ({ film }: Props) => {
  return (
    <DetailContainer>
      <p>
        <strong>Title:</strong> {film.title}
      </p>
      <p>
        <strong>Director:</strong> {film.director}
      </p>
      <p>
        <strong>Producer:</strong> {film.producer}
      </p>
      <p>
        <strong>Release Date:</strong> {film.release_date}
      </p>
      <p>
        <strong>Opening Crawl:</strong>
      </p>
      <p>{film.opening_crawl}</p>
    </DetailContainer>
  );
};
