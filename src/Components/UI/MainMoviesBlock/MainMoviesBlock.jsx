import React from "react";
import "./MainMoviesBlock.css";
import BigMovieCard from "../BigMovieCard/BigMovieCard";
import { v4 as uuidv4 } from "uuid";
import useAppState from "../../../Context/Hook/useAppState";

function MainMoviesBlock({ movies, ...props }) {
  const { mainMovies } = useAppState();

  return (
    <div className="main-movies-block">
      {mainMovies.map((movie) => {
        return <BigMovieCard movie={movie} key={uuidv4()} />;
      })}
    </div>
  );
}

export default MainMoviesBlock;
