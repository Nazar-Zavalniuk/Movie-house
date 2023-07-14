import React, { useCallback } from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import { BsCameraReels } from "react-icons/bs";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByDefault } from "../../../Utils/Sorting";

function Logo(props) {
  const { numReboots, setNumReboots, setSortingParams } = useAppState();

  const reloadHomepage = useCallback(() => {
    setNumReboots(numReboots + 1);
    sortByDefault(setSortingParams);
  }, [numReboots, setNumReboots, setSortingParams]);

  return (
    <div className="logo">
      <Link to="/homepage" className="logo-link" onClick={reloadHomepage}>
        <BsCameraReels size={52} />
        <span className="logo-title">Будинок кіно</span>
      </Link>
    </div>
  );
}

export default Logo;
