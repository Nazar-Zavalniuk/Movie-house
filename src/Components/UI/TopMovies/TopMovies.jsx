import React from "react";
import "./TopMovies.css";
import MiddleMovieCard from "../MiddleMovieCard/MiddleMovieCard";
import { v4 as uuidv4 } from "uuid";
import useAppState from "../../../Context/Hook/useAppState";

function TopMovies({ ...props }) {
  const { topMovies } = useAppState();

  return (
    <div className="top-movies">
      {topMovies.map((movie) => (
        <MiddleMovieCard movie={movie} key={uuidv4()} />
      ))}
    </div>
  );
}

export default TopMovies;
