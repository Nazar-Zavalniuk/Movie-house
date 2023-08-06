import React from "react";
import "./MovieBlockSkeleton.css";
import { BsPlayCircle } from "react-icons/bs";

function MovieBlockSkeleton(props) {
  return (
    <div className="movie-block skeleton">
      <div className="movie-header skeleton">
        <div className="movie-header-text skeleton">Дивитися онлайн</div>
      </div>
      <BsPlayCircle className="button-play" size={80} />
      <div className="movie skeleton"></div>
      <div className="movie-footer skeleton">
        <div className="movie-footer-info skeleton">
          <div className="movie-title">Назва</div>
          <div className="title-info">
            <div className="mfi-text skeleton" />
          </div>
        </div>
        <div className="movie-footer-info skeleton">
          <div className="movie-link">Посилання</div>
          <div className="link-info">
            <div className="mfi-text skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBlockSkeleton;
