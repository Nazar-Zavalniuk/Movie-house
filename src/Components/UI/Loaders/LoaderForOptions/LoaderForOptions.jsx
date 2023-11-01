import React from "react";
import "./LoaderForOptions.css";

function LoaderForOptions() {
  return (
    <li className="option">
      <div className="loader-for-options">
        <div className="loader-message">Завантаження</div>
        <div className="loader-animation"></div>
      </div>
    </li>
  );
}

export default LoaderForOptions;
