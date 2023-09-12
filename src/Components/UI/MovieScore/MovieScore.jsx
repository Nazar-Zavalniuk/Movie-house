import React, { useCallback } from "react";
import "./MovieScore.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { calculateRating } from "../../../Utils/Calculate";
import { useParams } from "react-router-dom";
import MoviesService from "../../../API/MoviesService";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function MovieScore({
  numberOfStars = 10,
  sizeStar,
  rating,
  setRating,
  votes,
  setVotes,
  hasTheRightToVote,
  titleStarRating,
  ...props
}) {
  const { setShowAuthRatingModal, userName } = useAppState();
  const isAuth = userName !== null;
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
    if (!isAuth) {
      setShowAuthRatingModal(true);
    }
  }, [isAuth, setShowAuthRatingModal]);

  return (
    <div
      className="star-rating"
      title={titleStarRating}
      onClick={openModalWindow}
    >
      {hasTheRightToVote ? (
        <ReactStars
          count={numberOfStars}
          isHalf={true}
          value={rating}
          edit={true}
          onChange={estimate}
          key="stars to rate"
          emptyIcon={<BsStarFill className="empty-star" size={sizeStar} />}
          halfIcon={<BsStarHalf className="filled-star" size={sizeStar} />}
          filledIcon={<BsStarFill className="filled-star" size={sizeStar} />}
        />
      ) : (
        <ReactStars
          count={numberOfStars}
          isHalf={true}
          value={rating}
          edit={false}
          key="read-only stars"
          emptyIcon={<BsStarFill className="empty-star" size={sizeStar} />}
          halfIcon={<BsStarHalf className="filled-star" size={sizeStar} />}
          filledIcon={<BsStarFill className="filled-star" size={sizeStar} />}
        />
      )}
    </div>
  );
}

export default MovieScore;
