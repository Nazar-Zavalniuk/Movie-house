import React, { useCallback } from "react";
import "./NavBar.css";
import { v4 as uuidv4 } from "uuid";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByGenre } from "../../../Utils/Sorting";
import { genres } from "../../../Data/DataToSort";
import { useNavigate } from "react-router-dom";

function NavBar({ ...props }) {
  const { setSortingParams } = useAppState();
  const navigate = useNavigate();

  const onChangeGenre = useCallback(
    (e) => {
      const genre = e.target.value;

      sortByGenre(setSortingParams, genre);
      navigate("/homepage");
    },
    [setSortingParams, navigate]
  );

  return (
    <ul className="nav-bar">
      {genres.map((genre) => {
        return (
          <li
            className="nav-bar-list-item"
            key={uuidv4()}
            onClick={onChangeGenre}
          >
            <option className="nav-bar-option" value={genre}>
              {genre}
            </option>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;
