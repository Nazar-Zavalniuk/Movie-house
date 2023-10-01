import React from "react";
import "./Loader.css";
import classNames from "classnames";

function Loader({ className, size = "small", ...props }) {
  const classNameLoader = classNames(
    className,
    { "loader-small": size === "small" },
    { "loader-normal": size === "normal" },
    { "loader-large": size === "large" }
  );

  return <div className={classNameLoader}></div>;
}

export default Loader;
