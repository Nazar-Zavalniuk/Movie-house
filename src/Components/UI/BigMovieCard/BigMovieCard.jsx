import React from "react";
import "./BigMovieCard.css";
import { Link } from "react-router-dom";
import StaticStarRating from "../StaticStarRating/StaticStarRating";

function BigMovieCard({ movie, ...props }) {
  const { title, year, coverImage, rating, id } = movie;
  const imgSize = {
    width: "200px",
    height: "300px",
  };

  return (
    <Link to={`/movie/${id}`} className="movie-link ml-big" title={title}>
      <img
        className="img-movie-card imc-big"
        alt=""
        src={coverImage}
        {...imgSize}
      />
      <span className="movie-title mt-big">{title}</span>
      <div className="rating-and-year">
        <StaticStarRating numberOfStars={10} sizeStar={15} rating={rating} />
        <span className="production-year">{year}</span>
      </div>
    </Link>
  );
}

export default BigMovieCard;
