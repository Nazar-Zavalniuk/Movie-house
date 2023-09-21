import React from "react";
import "./MiddleMovieCard.css";
import { Link } from "react-router-dom";

function MiddleMovieCard({ movie, ...props }) {
  const { title, coverImage, id } = movie;
  const imgSize = {
    width: "120px",
    height: "170px",
  };

  return (
    <Link to={`/movie/${id}`} className="movie-link ml-middle" title={title}>
      <img
        className="img-movie-card imc-middle"
        alt=""
        src={coverImage}
        {...imgSize}
      />
      <span className="movie-title mt-middle">{title}</span>
    </Link>
  );
}

export default MiddleMovieCard;
