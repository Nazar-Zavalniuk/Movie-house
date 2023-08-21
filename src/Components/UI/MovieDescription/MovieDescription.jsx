import React, { Fragment } from "react";
import "./MovieDescription.css";
import { BsFillStarFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAppState from "../../../Context/Hook/useAppState";

function MovieDescription({ children, MovieType, ...props }) {
  const { userName } = useAppState();
  const isAuth = userName !== null;
  let headerText;

  if (MovieType === "tv-series") headerText = "Про серіал";
  else if (MovieType === "movie") headerText = "Про фільм";
  else if (MovieType === "cartoon") headerText = "Про мультфільм";

  return (
    <div className="description">
      <div className="description-header">
        <div className="header-text">{headerText}</div>
        {isAuth && (
          <Fragment>
            <Link to="/watch-later">
              <FaRegClock className="description-icons" size={16} />
              <span>На потім</span>
            </Link>
            <Link to="/favorite">
              <BsFillStarFill className="description-icons" size={16} />
              <span>Обране</span>
            </Link>
          </Fragment>
        )}
      </div>
      <div className="text-description">{children}</div>
    </div>
  );
}

export default MovieDescription;
