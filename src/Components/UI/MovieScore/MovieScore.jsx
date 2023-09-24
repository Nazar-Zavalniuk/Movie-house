import React, { useCallback } from "react";
import "./MovieScore.css";
import { calculateRating } from "../../../Utils/Calculate";
import { useParams } from "react-router-dom";
import MoviesService from "../../../API/MoviesService";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import RatingStars from "../RatingStars/RatingStars";

function MovieScore({
  sizeStar,
  rating,
  setRating,
  votes,
  setVotes,
  hasTheRightToVote,
  titleRatingStars,
  ...props
}) {
  const { setShowAuthRatingModal, userName } = useAppState();
  const movieId = useParams().id;

  const estimate = useCallback(
    (grade) => {
      const newVotes = [
        ...votes,
        {
          userName,
          rating: grade,
        },
      ];

      const grades = newVotes.map((item) => item.rating);
      const numberOfVoters = newVotes.length;

      const newRating = calculateRating(grades, numberOfVoters);
      const newData = { votes: newVotes, rating: newRating };
      MoviesService.updateMovieData(movieId, newData);

      setRating(newRating);
      setVotes(newVotes);
    },
    [setRating, setVotes, votes, movieId, userName]
  );

  const openModalWindow = useCallback(() => {
    if (!userName) {
      setShowAuthRatingModal(true);
    }
  }, [userName, setShowAuthRatingModal]);

  return (
    <RatingStars
      className="movie-rating-stars"
      title={titleRatingStars}
      sizeStar={sizeStar}
      rating={rating}
      edit={hasTheRightToVote}
      onChange={estimate}
      onClick={openModalWindow}
    />
  );
}

export default MovieScore;
