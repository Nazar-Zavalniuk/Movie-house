import React, { useCallback } from "react";
import "./NavBar.css";
import { genres } from "../../../Data/DataToSort";
import { useNavigate } from "react-router-dom";
import useSortByGenre from "../../../Hooks/useSortByGenre";

function NavBar({ ...props }) {
  const navigate = useNavigate();
  const sortByGenre = useSortByGenre();

  const onChangeGenre = useCallback(
    (e) => {
      const genre = e.target.value.toLowerCase();

      sortByGenre(genre);
      navigate("/homepage");
    },
    [navigate, sortByGenre]
  );

  return (
    <ul className="nav-bar">
      {genres.map((genre, index) => {
        return (
          <li className="nav-bar-list-item" key={index} onClick={onChangeGenre}>
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
