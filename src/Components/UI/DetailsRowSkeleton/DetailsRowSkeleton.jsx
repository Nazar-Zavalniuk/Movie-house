import React from "react";
import "./DetailsRowSkeleton.css";

function DetailsRowSkeleton({ children, ...props }) {
  return (
    <div className="details-row skeleton">
      <div className="movie-parameter skeleton">{children}</div>
      <div className="parameter-description skeleton"></div>
    </div>
  );
}

export default DetailsRowSkeleton;
