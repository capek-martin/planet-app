import styled from "styled-components";
import { Film } from "../types/film.types";

const DetailContainer = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 0.5rem;

  span,
  p {
    font-weight: normal;
  }
`;

interface Props {
  film: Film;
}

export const FilmDetail = ({ film }: Props) => {
  return (
    <DetailContainer>
      <p>
        <strong>Title:</strong> <span>{film.title}</span>
      </p>
      <p>
        <strong>Director:</strong> <span>{film.director}</span>
      </p>
      <p>
        <strong>Producer:</strong> <span>{film.producer}</span>
      </p>
      <p>
        <strong>Release Date:</strong> <span>{film.release_date}</span>
      </p>
      <p>
        <strong>Opening Crawl:</strong>
      </p>
      <p>{film.opening_crawl}</p>
    </DetailContainer>
  );
};
