import React from "react";
import "./MovieBlock.css";
import { BsPlayCircle } from "react-icons/bs";
import CopyButton from "../Buttons/CopyButton/CopyButton";

function MovieBlock({ movieData, ...props }) {
  const { title } = movieData;
  const movieLink = window.location.href;

  return (
    <div className="movie-block">
      <div className="movie-header">
        <div className="movie-header-text">Дивитися онлайн</div>
      </div>
      <BsPlayCircle className="button-play" size={80} />
      <div className="movie"></div>
      <div className="movie-footer">
        <div className="movie-footer-info">
          <div className="movie-title">Назва</div>
          <div className="title-info">
            <div className="text-info" title={title}>
              {title}
            </div>
            <CopyButton className="copy-movie-info" data={title} />
          </div>
        </div>
        <div className="movie-footer-info">
          <div className="movie-link">Посилання</div>
          <div className="link-info">
            <div className="text-info" title={movieLink}>
              {movieLink}
            </div>
            <CopyButton className="copy-movie-info" data={movieLink} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBlock;
