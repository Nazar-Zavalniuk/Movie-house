import React, { Fragment } from "react";
import "./MovieDescriptionSkeleton.css";
import { Link } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";

function MovieDescriptionSkeleton(props) {
  const isAuth = false;

  return (
    <div className="description skeleton">
      <div className="description-header skeleton">
        <div className="header-text skeleton">
          <div />
        </div>
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
      <div className="text-description skeleton">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default MovieDescriptionSkeleton;
