import React, { useState } from "react";
import "./RatingInfo.css";
import MovieScore from "../MovieScore/MovieScore";

function RatingInfo({ movieData, ...props }) {
  const { rating, votes } = movieData;
  const [currentRating, setCurrentRating] = useState(rating);
  const [currentVotes, setCurrentVotes] = useState(votes);

  const userName = "Daniel";
  const isAuth = true;

  const votedUsers = currentVotes.map((item) => item.userName);
  const NumVotes = votedUsers.length;

  const hasTheRightToVote = !votedUsers.includes(userName) && isAuth;

  const titleStarRating = isAuth
    ? ""
    : "Можливість оцінюваті фільм мають тільки авторизовані користувачі";

  const votingInfo = votedUsers.includes(userName)
    ? `З вами проголосувало: ${NumVotes}`
    : `Усього проголосувало: ${NumVotes}`;

  return (
    <div className="rating">
      <MovieScore
        sizeStar={35}
        rating={currentRating}
        setRating={setCurrentRating}
        votes={currentVotes}
        setVotes={setCurrentVotes}
        hasTheRightToVote={hasTheRightToVote}
        titleStarRating={titleStarRating}
      />
      <div className="rating-info">
        <div className="rating-movie">Рейтинг: {currentRating.toFixed(2)}</div>
        <div className="voting-info">{votingInfo}</div>
      </div>
    </div>
  );
}

export default RatingInfo;
