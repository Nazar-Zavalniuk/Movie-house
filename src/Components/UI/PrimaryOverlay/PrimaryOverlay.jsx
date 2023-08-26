import React from "react";
import "./PrimaryOverlay.css";
import classNames from "classnames";
import Loader from "../Loader/Loader";

function PrimaryOverlay({
  className,
  isOverlayActive = false,
  loaderSize = "normal",
  ...props
}) {
  const classNameOverlay = classNames("overlay", className, {
    active: isOverlayActive,
  });

  return (
    <div className={classNameOverlay}>
      <Loader className="loader" size={loaderSize} />
    </div>
  );
}

export default PrimaryOverlay;
