import React, { useCallback } from "react";
import "./NavBar.css";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { genres } from "../../../Data/DataToSort";
import { useNavigate } from "react-router-dom";

function NavBar({ ...props }) {
  const { setSearchParams, setSearchInfo } = useAppState();
  const navigate = useNavigate();

  const onChangeGenre = useCallback(
    (e) => {
      const genre = e.target.value.toLowerCase();

      setSearchParams({
        genre_like: genre,
        _sort: "year,id",
        _order: "desc,desc",
        _limit: 12,
        _page: 1,
      });
      setSearchInfo({ sortByRating: false, info: `жанр - ${genre}` });
      navigate("/homepage");
    },
    [setSearchParams, setSearchInfo, navigate]
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
