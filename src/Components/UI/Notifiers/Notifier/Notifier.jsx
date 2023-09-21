import React from "react";
import classNames from "classnames";
import "./Notifier.css";

function Notifier({ className, children, ...props }) {
  const classNameNotifier = classNames("notifier", className);

  return <div className={classNameNotifier}>{children}</div>;
}

export default Notifier;
