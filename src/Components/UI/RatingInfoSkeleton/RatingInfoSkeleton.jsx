import React from "react";
import "./RatingInfoSkeleton.css";

function RatingInfoSkeleton(props) {
  return (
    <div className="rating skeleton">
      <div className="star-rating skeleton"></div>
      <div className="rating-info skeleton">
        <div className="rating-movie skeleton"></div>
        <div className="voting-info skeleton"></div>
      </div>
    </div>
  );
}

export default RatingInfoSkeleton;
