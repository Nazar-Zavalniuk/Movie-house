import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";
import useRebootHomepage from "../../../Hooks/useRebootHomepage";

function Logo(props) {
  const rebootHomepage = useRebootHomepage();

  return (
    <div className="logo">
      <Link to="/homepage" className="logo-link" onClick={rebootHomepage}>
        <BsCameraReels size={52} />
        <span className="logo-title">Будинок кіно</span>
      </Link>
    </div>
  );
}

export default Logo;
