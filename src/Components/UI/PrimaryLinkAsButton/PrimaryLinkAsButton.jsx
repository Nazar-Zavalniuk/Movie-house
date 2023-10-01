import React from "react";
import "./PrimaryLinkAsButton.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

function PrimaryLinkAsButton({ className, children, link, ...props }) {
  const classNameLink = classNames("link-btn", className);

  return (
    <Link {...props} className={classNameLink} to={link}>
      {children}
    </Link>
  );
}

export default PrimaryLinkAsButton;
