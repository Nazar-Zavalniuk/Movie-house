import React from "react";
import "./BigLoadingCard.css";

function BigLoadingCard(props) {
  return (
    <div className="loading-card lc-big">
      <div className="img-loading-card img-lc-big" />
      <div className="loading-card-content lcc-big">
        <div className="loading-card-title lct-big"></div>
        <div className="loading-card-rating-and-year lcray-big"></div>
      </div>
    </div>
  );
}

export default BigLoadingCard;
