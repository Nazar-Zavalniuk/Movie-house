import React, { Fragment, useCallback } from "react";
import "./AboutMovie.css";
import { Link } from "react-router-dom";
import MovieDescription from "../MovieDescription/MovieDescription";
import RollWrapper from "../RollWrapper/RollWrapper";
import useSortByCountry from "../../../Hooks/useSortByCountry";
import useSortByGenre from "../../../Hooks/useSortByGenre";
import useSortByDirector from "../../../Hooks/useSortByDirector";
import useSortByActor from "../../../Hooks/useSortByActor";
import useSortByYear from "../../../Hooks/useSortByYear";
import useLinks from "../../../Hooks/useLinks";

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

  const sortByCountry = useSortByCountry();
  const countriesLinks = useLinks(country, sortByCountry);

  const sortByGenre = useSortByGenre();
  const genresLinks = useLinks(genre, sortByGenre);

  const sortByDirector = useSortByDirector();
  const directorsLinks = useLinks(director, sortByDirector);

  const sortByActor = useSortByActor();
  const actorsLinks = useLinks(actors, sortByActor);

  const sortByYearDefaultFunc = useSortByYear();
  const sortByYear = useCallback(
    (e) => {
      const year = e.target.textContent;

      sortByYearDefaultFunc(year);
    },
    [sortByYearDefaultFunc]
  );

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
            <Link to="/homepage" onClick={sortByYear}>
              {year}
            </Link>
          </div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Країна(и)</div>
          <div className="parameter-description">{countriesLinks}</div>
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
          <div className="parameter-description">
            {directorsLinks ? directorsLinks : "інформація відсутня"}
          </div>
        </div>
        <div className="details-row">
          <div className="movie-parameter">Актор(и)</div>
          <div className="parameter-description">
            <RollWrapper className="actors">
              {actorsLinks ? actorsLinks : "інформація відсутня"}
            </RollWrapper>
          </div>
        </div>
      </div>
      <MovieDescription MovieType={type}>{description}</MovieDescription>
    </Fragment>
  );
}

export default AboutMovie;
