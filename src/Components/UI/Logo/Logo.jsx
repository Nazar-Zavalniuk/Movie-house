import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";

function Logo(props) {
  return (
    <div className="logo">
      <Link to="/homepage" className="logo-link">
        <BsCameraReels size={52} />
        <span className="logo-title">Будинок кіно</span>
      </Link>
    </div>
  );
}

export default Logo;
