import React from "react";
import "./TopMovies.css";
import MiddleMovieCard from "../MiddleMovieCard/MiddleMovieCard";
import { v4 as uuidv4 } from "uuid";
import useAppState from "../../../Context/Hook/useAppState";
import MiddleLoadingCard from "../MiddleLoadingCard/MiddleLoadingCard";

function TopMovies({ ...props }) {
  const { topMovies, isTopMoviesLoading } = useAppState();

  const cardsSkeletons = Array(7)
    .fill(null)
    .map(() => {
      return <MiddleLoadingCard key={uuidv4()} />;
    });

  const moviesCards = topMovies.map((movie) => {
    return <MiddleMovieCard movie={movie} key={uuidv4()} />;
  });

  return (
    <div className="top-movies">
      {isTopMoviesLoading ? cardsSkeletons : moviesCards}
    </div>
  );
}

export default TopMovies;
