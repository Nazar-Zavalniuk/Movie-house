import React from "react";
import "./MiddleLoadingCard.css";

function MiddleLoadingCard(props) {
  return (
    <div className="loading-card lc-middle">
      <div className="img-loading-card img-lc-middle" />
      <div className="loading-card-content lcc-middle">
        <div className="loading-card-title lct-middle"></div>
      </div>
    </div>
  );
}

export default MiddleLoadingCard;
