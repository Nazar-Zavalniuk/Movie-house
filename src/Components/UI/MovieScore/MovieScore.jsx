import React, { useCallback } from "react";
import "./MovieScore.css";
import { calculateRating } from "../../../Utils/Calculate";
import MoviesService from "../../../API/MoviesService";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import RatingStars from "../RatingStars/RatingStars";

function MovieScore({
  sizeStar,
  rating,
  setRating,
  votes,
  assessments,
  movieId,
  setVotes,
  hasTheRightToVote,
  titleRatingStars,
  ...props
}) {
  const { setShowAuthRatingModal, userName } = useAppState();

  const estimate = useCallback(
    (grade) => {
      const newVotes = [...votes, userName];
      const newAssessments = [...assessments, grade];
      const numberOfVoters = newVotes.length;

      const newRating = calculateRating(newAssessments, numberOfVoters);
      const newData = {
        records: [
          { fields: { username: userName, movie: [movieId], rating: grade } },
        ],
      };
      MoviesService.rateMovie(newData);

      setRating(newRating);
      setVotes(newVotes);
    },
    [setRating, setVotes, votes, userName, assessments, movieId]
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
