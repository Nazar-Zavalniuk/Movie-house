import React, { Fragment } from "react";
import "./AboutMovieSkeleton.css";
import DetailsRowSkeleton from "../DetailsRowSkeleton/DetailsRowSkeleton";
import MovieDescriptionSkeleton from "../MovieDescriptionSkeleton/MovieDescriptionSkeleton";

function AboutMovieSkeleton(props) {
  return (
    <Fragment>
      <div className="movie-img skeleton" />
      <div className="details skeleton">
        <DetailsRowSkeleton>Назва</DetailsRowSkeleton>
        <DetailsRowSkeleton>Рік</DetailsRowSkeleton>
        <DetailsRowSkeleton>Країна(и)</DetailsRowSkeleton>
        <DetailsRowSkeleton>Жанр(и)</DetailsRowSkeleton>
        <DetailsRowSkeleton>Час</DetailsRowSkeleton>
        <DetailsRowSkeleton>Режисер(и)</DetailsRowSkeleton>
        <DetailsRowSkeleton>Актор(и)</DetailsRowSkeleton>
      </div>
      <MovieDescriptionSkeleton />
    </Fragment>
  );
}

export default AboutMovieSkeleton;
