import classNames from "classnames";
import React from "react";

function Checkbox({ className, ...props }) {
  const classNameCheckbox = classNames("checkbox", className);

  return <input {...props} className={classNameCheckbox} type="checkbox" />;
}

export default Checkbox;
