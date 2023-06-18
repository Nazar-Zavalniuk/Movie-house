import React, { useCallback } from "react";
import "./NavBar.css";
import { v4 as uuidv4 } from "uuid";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByGenre } from "../../../Utils/Sorting";

function NavBar({ ...props }) {
  const { setSortingParams } = useAppState();

  const genres = [
    "Вестерн",
    "Біографія",
    "Бойовик",
    "Військовий",
    "Детектив",
    "Драма",
    "Документальний",
    "Історія",
    "Комедія",
    "Кримінал",
    "Мелодрама",
    "Музика",
    "Мультфільм",
    "Пригоди",
    "Сімейний",
    "Серіал",
    "Спорт",
    "Трилер",
    "Жахи",
    "Фентезі",
    "Фантастика",
  ];

  const onChangeGenre = useCallback(
    (e) => {
      const genre = e.target.value.toLowerCase();

      if (genre) {
        sortByGenre(setSortingParams, genre);
      }
    },
    [setSortingParams]
  );

  return (
    <ul className="nav-bar" onClick={onChangeGenre}>
      {genres.map((genre) => {
        return (
          <li className="nav-bar-list-item" key={uuidv4()}>
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
