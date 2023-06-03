import React from "react";
import "./NavBar.css";
import { v4 as uuidv4 } from "uuid";

function NavBar(props) {
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
    "Серіали",
    "Спорт",
    "Трилер",
    "Жахи",
    "Фентезі",
    "Фантастика",
  ];

  return (
    <ul className="nav-bar">
      {genres.map((genre) => {
        return (
          <li className="nav-bar-list-item" key={uuidv4()}>
            {genre}
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;
