import React from "react";
import "./BlockRecommendations.css";
import { BsFillPlayFill } from "react-icons/bs";
import SmallMovieCard from "../SmallMovieCard/SmallMovieCard";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

function BlockRecommendations({ className, movies, children, ...props }) {
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
      <div {...props} className={classNameTitle}>
        <span className={classNameTitleText}>{children}</span>
        <BsFillPlayFill className={classNameImg} />
      </div>
      <div className={classNameMovieCardBlock}>
        {movies.map((movie) => {
          return <SmallMovieCard movie={movie} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
}

export default BlockRecommendations;
