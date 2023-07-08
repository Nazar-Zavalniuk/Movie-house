import React, { useEffect, useState } from "react";
import "./BlockRecommendations.css";
import { BsFillPlayFill } from "react-icons/bs";
import SmallMovieCard from "../SmallMovieCard/SmallMovieCard";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import useAppState from "../../../Context/Hook/useAppState";
import SmallLoadingCard from "../SmallLoadingCard/SmallLoadingCard";

function BlockRecommendations({ className, movies, children, ...props }) {
  const { isRecommendedMoviesLoading, isRecommendedSeriesLoading } =
    useAppState();
  const classNameBlock = classNames("recommended", className, "block");
  const classNameTitle = classNames("recommended", className, "title");
  const classNameTitleText = classNames("recommended", className, "title-text");
  const classNameImg = classNames("recommended", className, "img");
  const classNameMovieCardBlock = classNames(
    "recommended-movie-cards",
    className
  );

  const [isCarsLoading, setIsCardsLoading] = useState(true);
  useEffect(() => {
    const isCarsLoading =
      isRecommendedMoviesLoading || isRecommendedSeriesLoading;

    if (!isCarsLoading) setIsCardsLoading(false);
  }, [isRecommendedMoviesLoading, isRecommendedSeriesLoading]);

  const cardsSkeletons = Array(6)
    .fill(null)
    .map(() => {
      return <SmallLoadingCard key={uuidv4()} />;
    });

  const moviesCards = movies.map((movie) => {
    return <SmallMovieCard movie={movie} key={uuidv4()} />;
  });

  return (
    <div className={classNameBlock}>
      <div {...props} className={classNameTitle}>
        <span className={classNameTitleText}>{children}</span>
        <BsFillPlayFill className={classNameImg} />
      </div>
      <div className={classNameMovieCardBlock}>
        {isCarsLoading ? cardsSkeletons : moviesCards}
      </div>
    </div>
  );
}

export default BlockRecommendations;
