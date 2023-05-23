import React from "react";
import "./PrimaryButton.css";
import classNames from "classnames";

function PrimaryButton({ children, className, ...props }) {
  const classNameBtn = classNames("btn", className);

  return (
    <button {...props} className={classNameBtn}>
      <span className="text-btn">{children}</span>
    </button>
  );
}

export default PrimaryButton;
