import React from "react";
import "./TopMovies.css";
import MiddleMovieCard from "../MiddleMovieCard/MiddleMovieCard";
import useAppState from "../../../Context/Hook/useAppState";
import MiddleLoadingCard from "../MiddleLoadingCard/MiddleLoadingCard";

function TopMovies({ ...props }) {
  const { topMovies, isTopMoviesLoading } = useAppState();

  const cardsSkeletons = Array(7)
    .fill(null)
    .map((_, index) => {
      return <MiddleLoadingCard key={index} />;
    });

  const moviesCards = topMovies.map((movie, index) => {
    return <MiddleMovieCard movie={movie} key={index} />;
  });

  return (
    <div className="top-movies">
      {isTopMoviesLoading ? cardsSkeletons : moviesCards}
    </div>
  );
}

export default TopMovies;
