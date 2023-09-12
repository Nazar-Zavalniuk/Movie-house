import React, { Fragment, useCallback } from "react";
import "./AboutMovie.css";
import { Link } from "react-router-dom";
import { convertStringToLinksAndSetSearchFunction } from "../../../Utils/Conversion";
import { sortByOption, sortByGenre } from "../../../Utils/Sorting";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import MovieDescription from "../MovieDescription/MovieDescription";
import RollWrapper from "../RollWrapper/RollWrapper";

function AboutMovie({ movieData, ...props }) {
  const {
    title,
    year,
    country,
    genre,
    time,
    description,
    coverImage,
    actors,
    director,
    type,
  } = movieData;

  const { setSortingParams } = useAppState();

  const conuntriesLinks = convertStringToLinksAndSetSearchFunction(
    country,
    sortByOption,
    setSortingParams,
    "country"
  );
  const genresLinks = convertStringToLinksAndSetSearchFunction(
    genre,
    sortByGenre,
    setSortingParams
  );
  const directorsLinks =
    director !== null
      ? convertStringToLinksAndSetSearchFunction(
          director,
          sortByOption,
          setSortingParams,
          "director"
        )
      : "інформація відсутня";
  const actorsLinks =
    actors !== null
      ? convertStringToLinksAndSetSearchFunction(
          actors,
          sortByOption,
          setSortingParams,
          "actor"
        )
      : "інформація відсутня";

  const searchByYear = useCallback((e) => {
    const year = e.target.textContent;
    sortByOption(setSortingParams, "year", year);
  }, []);

  return (
    <Fragment>
      <img className="movie-img" alt="" src={coverImage} />
      <div className="details">
        <div className="details-row">
          <div className="movie-parameter">Назва</div>
          <div className="parameter-description">{title}</div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Рік</div>
          <div className="parameter-description">
            <Link to="/homepage" onClick={searchByYear}>
              {year}
            </Link>
          </div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Країна(и)</div>
          <div className="parameter-description">{conuntriesLinks}</div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Жанр(и)</div>
          <div className="parameter-description">{genresLinks}</div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Час</div>
          <div className="parameter-description">{time}</div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Режисер(и)</div>
          <div className="parameter-description">{directorsLinks}</div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Актор(и)</div>
          <div className="parameter-description">
            <RollWrapper className="actors">{actorsLinks}</RollWrapper>
          </div>
        </div>
      </div>
      <MovieDescription MovieType={type}>{description}</MovieDescription>
    </Fragment>
  );
}

export default AboutMovie;
