import React from "react";
import "./PrimaryInput.css";
import classNames from "classnames";

function PrimaryInput({ className, ...props }) {
  const classNameInput = classNames("input", className);

  return <input {...props} className={classNameInput} />;
}

export default PrimaryInput;
