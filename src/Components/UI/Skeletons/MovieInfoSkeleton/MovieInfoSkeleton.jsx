import React from "react";
import AboutMovieSkeleton from "../AboutMovieSkeleton/AboutMovieSkeleton";
import RatingInfoSkeleton from "../RatingInfoSkeleton/RatingInfoSkeleton";
import MovieBlockSkeleton from "../MovieBlockSkeleton/MovieBlockSkeleton";

function MovieInfoSkeleton(props) {
  return (
    <div className="movie-info">
      <div className="movie-info-body">
        <div className="movie-details">
          <AboutMovieSkeleton />
          <RatingInfoSkeleton />
          <MovieBlockSkeleton />
        </div>
      </div>
    </div>
  );
}

export default MovieInfoSkeleton;
