import React, { Fragment } from "react";
import "./MainMoviesBlock.css";
import BigMovieCard from "../Cards/BigMovieCard/BigMovieCard";
import BigLoadingCard from "../Cards/BigLoadingCard/BigLoadingCard";
import PageNavigationButtons from "../Buttons/PageNavigationButtons/PageNavigationButtons";

function MainMoviesBlock({
  movies = [],
  isMoviesLoading,
  totalPages = 0,
  scrollParams,
  ...props
}) {
  const cardsSkeletons = Array(12)
    .fill(null)
    .map((_, index) => {
      return <BigLoadingCard key={index} />;
    });

  const moviesCards = movies.map((movie, index) => {
    return <BigMovieCard movie={movie} key={index} />;
  });

  return (
    <Fragment>
      <div className="main-movies-block">
        {isMoviesLoading ? cardsSkeletons : moviesCards}
      </div>
      {totalPages !== 1 && !isMoviesLoading && (
        <PageNavigationButtons
          totalPages={totalPages}
          scrollParams={scrollParams}
        />
      )}
    </Fragment>
  );
}

export default MainMoviesBlock;
