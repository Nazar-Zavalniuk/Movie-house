import React from "react";
import "./PrimaryLinkAsButton.css";
import classNames from "classnames";

function PrimaryLinkAsButton({ className, children, href, ...props }) {
  const classNameLink = classNames("link-btn", className);

  return (
    <a {...props} className={classNameLink} href={href}>
      {children}
    </a>
  );
}

export default PrimaryLinkAsButton;
