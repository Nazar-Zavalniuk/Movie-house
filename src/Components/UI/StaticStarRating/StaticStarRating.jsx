import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

function StaticStarRating({
  sizeStar,
  numberOfStars = 10,
  rating = 0,
  ...props
}) {
  const filledStars = Array(Math.floor(rating))
    .fill(null)
    .map((star) => {
      return (
        <BsStarFill className="star filled" size={sizeStar} key={uuidv4()} />
      );
    });

  const hasHalfStar = Math.round(rating) > Math.floor(rating);
  const halfStar = hasHalfStar ? (
    <BsStarHalf className="star filled" size={sizeStar} key={uuidv4()} />
  ) : null;

  const numEmptyStars = hasHalfStar
    ? numberOfStars - Math.ceil(rating)
    : numberOfStars - Math.floor(rating);

  const emptyStars = Array(numEmptyStars)
    .fill(null)
    .map((star) => {
      return (
        <BsStarFill className="star empty" size={sizeStar} key={uuidv4()} />
      );
    });

  const stars = [...filledStars, halfStar, ...emptyStars];

  return <div className="star-rating">{stars}</div>;
}

export default StaticStarRating;
