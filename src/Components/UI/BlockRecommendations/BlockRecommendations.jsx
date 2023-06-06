import React from "react";
import "./BlockRecommendations.css";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import SmallMovieCard from "../SmallMovieCard/SmallMovieCard";
import classNames from "classnames";

function BlockRecommendations({ className, movies, link, children, ...props }) {
  const classNameBlock = classNames("recommended", className, "block");
  const classNameTitle = classNames("recommended", className, "title");
  const classNameTitleText = classNames("recommended", className, "title-text");
  const classNameImg = classNames("recommended", className, "img");
  const classNameMovieCardBlock = classNames(
    "recommended-movie-cards",
    className
  );

  return (
    <div className={classNameBlock}>
      <Link className={classNameTitle} to={link}>
        <span className={classNameTitleText}>{children}</span>
        <BsFillPlayFill className={classNameImg} />
      </Link>
      <div className={classNameMovieCardBlock}>
        {movies.map((movie) => {
          return <SmallMovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default BlockRecommendations;
