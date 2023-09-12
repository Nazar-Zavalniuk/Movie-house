import React from "react";
import "./TopMovies.css";
import MiddleMovieCard from "../MiddleMovieCard/MiddleMovieCard";
import MiddleLoadingCard from "../MiddleLoadingCard/MiddleLoadingCard";
import { useMoviesState } from "../../../Context/MoviesStateProvider/MoviesStateProvider";

function TopMovies({ ...props }) {
  const { topMovies, isTopMoviesLoading } = useMoviesState();

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
