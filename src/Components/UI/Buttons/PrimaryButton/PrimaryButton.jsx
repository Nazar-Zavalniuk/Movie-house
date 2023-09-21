import React, { forwardRef } from "react";
import "./PrimaryButton.css";
import classNames from "classnames";

const PrimaryButton = forwardRef(({ children, className, ...props }, ref) => {
  const classNameBtn = classNames("btn", className);

  return (
    <button {...props} className={classNameBtn} ref={ref}>
      <span className="text-btn">{children}</span>
    </button>
  );
});

export default PrimaryButton;
