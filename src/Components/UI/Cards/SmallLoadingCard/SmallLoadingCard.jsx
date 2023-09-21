import React from "react";
import "./SmallLoadingCard.css";

function SmallLoadingCard(props) {
  return (
    <div className="loading-card lc-small">
      <div className="img-loading-card img-lc-small" />
      <div className="loading-card-content lcc-small">
        <div className="loading-card-title lct-small"></div>
      </div>
    </div>
  );
}

export default SmallLoadingCard;
