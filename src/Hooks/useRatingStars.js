import { BsStarFill, BsStarHalf } from "react-icons/bs";
import React from "react";

function useRatingStars(numberOfStars, rating, sizeStar) {
  const filledStars = Array(Math.floor(rating))
    .fill(null)
    .map((star) => {
      return (
        <span className="star filled">
          <BsStarFill size={sizeStar} />
        </span>
      );
    });

  const hasHalfStar = Math.round(rating) > Math.floor(rating);
  const halfStar = hasHalfStar ? (
    <span className="star filled">
      <BsStarHalf size={sizeStar} />
    </span>
  ) : null;

  const numEmptyStars = hasHalfStar
    ? numberOfStars - Math.ceil(rating)
    : numberOfStars - Math.floor(rating);

  const emptyStars = Array(numEmptyStars)
    .fill(null)
    .map((star) => {
      return (
        <span className="star empty">
          <BsStarFill size={sizeStar} />
        </span>
      );
    });

  const stars = [...filledStars, halfStar, ...emptyStars].filter(
    (star) => star !== null
  );

  const ratingStars = stars.map((star, index) => {
    return React.cloneElement(star, { key: index });
  });

  return ratingStars;
}

export default useRatingStars;
