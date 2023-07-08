import React from "react";
import "./MainMoviesBlock.css";
import BigMovieCard from "../BigMovieCard/BigMovieCard";
import { v4 as uuidv4 } from "uuid";
import useAppState from "../../../Context/Hook/useAppState";
import BigLoadingCard from "../BigLoadingCard/BigLoadingCard";

function MainMoviesBlock({ movies, ...props }) {
  const { mainMovies, isMainMoviesLoading } = useAppState();

  const cardsSkeletons = Array(12)
    .fill(null)
    .map(() => {
      return <BigLoadingCard key={uuidv4()} />;
    });

  const moviesCards = mainMovies.map((movie) => {
    return <BigMovieCard movie={movie} key={uuidv4()} />;
  });

  return (
    <div className="main-movies-block">
      {isMainMoviesLoading ? cardsSkeletons : moviesCards}
    </div>
  );
}

export default MainMoviesBlock;
