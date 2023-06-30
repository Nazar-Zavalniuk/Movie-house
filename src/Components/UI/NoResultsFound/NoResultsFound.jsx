import React from "react";
import "./NoResultsFound.css";
import useAppState from "../../../Context/Hook/useAppState";

function NoResultsFound(props) {
  const { searchQueryValue } = useAppState();
  const isSearchByTitle = searchQueryValue !== "";
  const truncatedQueryValue =
    searchQueryValue.length > 50 && isSearchByTitle
      ? searchQueryValue.slice(0, 47) + "..."
      : searchQueryValue;

  return (
    <div className="no-results-found">
      {isSearchByTitle ? (
        <div className="search-info">
          Нічого не знайдено за запитом: <br />
          <span className="search-value" title={searchQueryValue}>
            "{truncatedQueryValue}"
          </span>{" "}
          <br />
          <span className="search-clue">
            Переконайтеся, що назву було введено без помилок, або спробуйте
            ввести хоча б одне слово з назви фільму.
          </span>
        </div>
      ) : (
        <div className="search-info">
          За вказаніми параметрами нічого не знайдено.
        </div>
      )}
    </div>
  );
}

export default NoResultsFound;
