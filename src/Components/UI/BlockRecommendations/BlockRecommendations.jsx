import React from "react";
import "./BlockRecommendations.css";
import { BsFillPlayFill } from "react-icons/bs";
import SmallMovieCard from "../Cards/SmallMovieCard/SmallMovieCard";
import classNames from "classnames";
import SmallLoadingCard from "../Cards/SmallLoadingCard/SmallLoadingCard";
import { useMoviesState } from "../../../Context/MoviesStateProvider/MoviesStateProvider";

function BlockRecommendations({ className, movies, children, ...props }) {
  const { isRecommendedMoviesLoading, isRecommendedSeriesLoading } =
    useMoviesState();
  const classNameBlock = classNames("recommended", className, "block");
  const classNameTitle = classNames("recommended", className, "title");
  const classNameTitleText = classNames("recommended", className, "title-text");
  const classNameImg = classNames("recommended", className, "img");
  const classNameMovieCardBlock = classNames(
    "recommended-movie-cards",
    className
  );

  const isCarsLoading =
    isRecommendedMoviesLoading || isRecommendedSeriesLoading;

  const thereAreNoMovies = movies.length === 0 && !isCarsLoading;

  const cardsSkeletons = Array(6)
    .fill(null)
    .map((_, index) => {
      return <SmallLoadingCard key={index} />;
    });

  const moviesCards = movies.map((movie, index) => {
    return <SmallMovieCard movie={movie} key={index} />;
  });

  return (
    <div className={classNameBlock}>
      <div {...props} className={classNameTitle}>
        <span className={classNameTitleText}>{children}</span>
        <BsFillPlayFill className={classNameImg} />
      </div>
      {!thereAreNoMovies && (
        <div className={classNameMovieCardBlock}>
          {isCarsLoading ? cardsSkeletons : moviesCards}
        </div>
      )}
    </div>
  );
}

export default BlockRecommendations;
