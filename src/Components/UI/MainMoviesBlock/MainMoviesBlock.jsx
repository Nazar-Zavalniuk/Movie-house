import React, { Fragment } from "react";
import "./MainMoviesBlock.css";
import BigMovieCard from "../Cards/BigMovieCard/BigMovieCard";
import BigLoadingCard from "../Cards/BigLoadingCard/BigLoadingCard";
import PageNavigationButtons from "../Buttons/PageNavigationButtons/PageNavigationButtons";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function MainMoviesBlock({
  movies = [],
  isMoviesLoading,
  scrollParams,
  ...props
}) {
  const { offsetPages } = useAppState();

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
      {offsetPages.length > 1 && (
        <PageNavigationButtons scrollParams={scrollParams} />
      )}
    </Fragment>
  );
}

export default MainMoviesBlock;
