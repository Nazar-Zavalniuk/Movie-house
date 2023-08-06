import React, { Fragment } from "react";
import "./MainMoviesBlock.css";
import BigMovieCard from "../BigMovieCard/BigMovieCard";
import useAppState from "../../../Context/Hook/useAppState";
import BigLoadingCard from "../BigLoadingCard/BigLoadingCard";
import PageNavigationButtons from "../PageNavigationButtons/PageNavigationButtons";

function MainMoviesBlock({ movies, scrollParams, ...props }) {
  const { totalPages, mainMovies, isMainMoviesLoading } = useAppState();

  const cardsSkeletons = Array(12)
    .fill(null)
    .map((_, index) => {
      return <BigLoadingCard key={index} />;
    });

  const moviesCards = mainMovies.map((movie, index) => {
    return <BigMovieCard movie={movie} key={index} />;
  });

  return (
    <Fragment>
      <div className="main-movies-block">
        {isMainMoviesLoading ? cardsSkeletons : moviesCards}
      </div>
      {totalPages !== 1 && !isMainMoviesLoading && (
        <PageNavigationButtons scrollParams={scrollParams} />
      )}
    </Fragment>
  );
}

export default MainMoviesBlock;
