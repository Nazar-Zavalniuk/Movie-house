import React from "react";
import "./SmallMovieCard.css";
import { Link } from "react-router-dom";

function SmallMovieCard({ movie, ...props }) {
  const { title, coverImage, id } = movie;
  const imgSize = {
    width: "113px",
    height: "165px",
  };

  return (
    <Link to={`/movie/${id}`} className="movie-link ml-small" title={title}>
      <img
        className="img-movie-card imc-small"
        alt=""
        src={coverImage}
        {...imgSize}
      />
      <span className="movie-title mt-small">{title}</span>
    </Link>
  );
}

export default SmallMovieCard;
