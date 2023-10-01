import React, { useCallback, useState, Fragment } from "react";
import useRatingStars from "../../../Hooks/useRatingStars";
import "./RatingStars.css";
import classNames from "classnames";

function RatingStars({
  className,
  sizeStar,
  numberOfStars = 10,
  rating = 0,
  edit = false,
  onChange = () => {},
  ...props
}) {
  const [currentRating, setCurrentRating] = useState(rating);

  const [preliminaryRating, setPreliminaryRating] = useState(rating);
  const ratingStars = useRatingStars(
    numberOfStars,
    preliminaryRating,
    sizeStar
  );

  const handleOnMouseLeave = useCallback(() => {
    setPreliminaryRating(currentRating);
  }, [currentRating]);

  const preliminaryEstimate = useCallback((e) => {
    const ratingValue = Number(e.currentTarget.dataset.ratingValue);

    if (ratingValue) {
      setPreliminaryRating(ratingValue);
    }
  }, []);

  const estimate = useCallback(
    (e) => {
      const ratingValue = Number(e.currentTarget.dataset.ratingValue);

      if (ratingValue) {
        setCurrentRating(ratingValue);
        onChange(ratingValue);
      }
    },
    [onChange]
  );

  const staticRatingStars = useRatingStars(numberOfStars, rating, sizeStar);

  const ratingStarsForRating = ratingStars.map((star, index) => {
    const rating = index + 1;

    return React.cloneElement(star, {
      "data-rating-value": rating,
      key: index,
      onMouseEnter: preliminaryEstimate,
      onClick: estimate,
    });
  });

  const classNameBlock = classNames("rating-stars", className);

  return (
    <Fragment>
      {edit ? (
        <div
          {...props}
          className={classNameBlock}
          onMouseLeave={handleOnMouseLeave}
        >
          {ratingStarsForRating}
        </div>
      ) : (
        <div {...props} className={classNameBlock}>
          {staticRatingStars}
        </div>
      )}
    </Fragment>
  );
}

export default RatingStars;
