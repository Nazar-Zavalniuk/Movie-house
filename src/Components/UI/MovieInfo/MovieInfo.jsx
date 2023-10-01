import React from "react";
import "./MovieInfo.css";
import RatingInfo from "../RatingInfo/RatingInfo";
import MovieBlock from "../MovieBlock/MovieBlock";
import AboutMovie from "../AboutMovie/AboutMovie";

function MovieInfo({ movieData, ...props }) {
  return (
    <div className="movie-info">
      <div className="movie-info-body">
        <div className="movie-details">
          <AboutMovie movieData={movieData} />
          <RatingInfo movieData={movieData} />
          <MovieBlock movieData={movieData} />
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
