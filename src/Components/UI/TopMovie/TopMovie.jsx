import React from "react";
import "./TopMovie.css";
import MiddleMovieCard from "../MiddleMovieCard/MiddleMovieCard";
import { v4 as uuidv4 } from "uuid";

function TopMovie({ movies, ...props }) {
  return (
    <div className="top-movie">
      {movies.map((movie) => (
        <MiddleMovieCard movie={movie} key={uuidv4()} />
      ))}
    </div>
  );
}

export default TopMovie;
