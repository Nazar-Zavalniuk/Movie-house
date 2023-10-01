import React, { forwardRef } from "react";
import "./PrimaryInput.css";
import classNames from "classnames";

const PrimaryInput = forwardRef(({ className, ...props }, ref) => {
  const classNameInput = classNames("input", className);

  return <input ref={ref} {...props} className={classNameInput} />;
});

export default PrimaryInput;
