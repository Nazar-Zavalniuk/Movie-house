import React, { useState } from "react";
import "./RatingInfo.css";
import MovieScore from "../MovieScore/MovieScore";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function RatingInfo({ movieData, ...props }) {
  const { rating, ratedByUsers, assessments, id } = movieData;
  const [currentRating, setCurrentRating] = useState(rating);
  const [currentVotes, setCurrentVotes] = useState(ratedByUsers);

  const { username } = useAppState();
  const isAuth = username !== null;

  const votedUsers = currentVotes;
  const NumVotes = votedUsers.length;

  const hasTheRightToVote = !votedUsers.includes(username) && isAuth;

  const titleRatingStars = isAuth
    ? ""
    : "Можливість оцінюваті фільм мають тільки авторизовані користувачі";

  const votingInfo =
    votedUsers.includes(username) && isAuth
      ? `З вами проголосувало: ${NumVotes}`
      : `Усього проголосувало: ${NumVotes}`;

  return (
    <div className="rating">
      <MovieScore
        sizeStar={35}
        rating={currentRating}
        setRating={setCurrentRating}
        votes={currentVotes}
        assessments={assessments}
        movieId={id}
        setVotes={setCurrentVotes}
        hasTheRightToVote={hasTheRightToVote}
        titleRatingStars={titleRatingStars}
      />
      <div className="rating-info">
        <div className="rating-movie">Рейтинг: {currentRating.toFixed(2)}</div>
        <div className="voting-info">{votingInfo}</div>
      </div>
    </div>
  );
}

export default RatingInfo;
