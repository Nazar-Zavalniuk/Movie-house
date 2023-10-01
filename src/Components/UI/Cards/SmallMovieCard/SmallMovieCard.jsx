import React from "react";
import "./SmallMovieCard.css";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import classNames from "classnames";

function SmallMovieCard({
  includesBtn = false,
  classNameButton,
  btnTitle,
  movie,
  ...props
}) {
  const { title, coverImage, id } = movie;
  const imgSize = {
    width: "111px",
    height: "165px",
  };

  const classNameBtn = classNames(classNameButton, "small-card-btn");

  return (
    <div className="small-card-wrapper">
      <Link to={`/movie/${id}`} className="movie-link ml-small" title={title}>
        <img
          className="img-movie-card imc-small"
          alt=""
          src={coverImage}
          {...imgSize}
        />
        <span className="movie-title mt-small">{title}</span>
      </Link>
      {includesBtn && (
        <PrimaryButton {...props} className={classNameBtn} title={btnTitle}>
          <ImCross />
        </PrimaryButton>
      )}
    </div>
  );
}

export default SmallMovieCard;
