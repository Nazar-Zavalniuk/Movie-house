import React, { useCallback, useState } from "react";
import "./MultiFilter.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { directors, countries, years, genres } from "../../../Data/DataToSort";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import Selector from "../Selector/Selector";

function MultiFilter({ setIsFilterOptionsSet, setIsFirstPageLoad, ...props }) {
  const { actors, setSearchParams, setSearchInfo } = useAppState();

  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");
  const [director, setDirector] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");

  const search = useCallback(
    async (e) => {
      e.preventDefault();

      const isFilterOptionSet = (option) => option !== "";

      const filterOptions = [genre, actor, director, country, year];
      const isFilterOptionsSet = filterOptions.some(isFilterOptionSet);

      if (isFilterOptionsSet) {
        setSearchParams({
          genre_like: genre !== "" ? genre : null,
          actors_like: actor !== "" ? actor : null,
          director_like: director !== "" ? director : null,
          country_like: country !== "" ? country : null,
          year: year !== "" ? year : null,
          _limit: 12,
          _page: 1,
        });
        setSearchInfo({
          sortByRating: false,
          info: "навігатор результати пошуку",
        });
        setIsFilterOptionsSet(true);
      } else {
        setSearchInfo({
          sortByRating: false,
          info: "навігатор",
        });
        setIsFilterOptionsSet(false);
      }

      setIsFirstPageLoad(false);
    },
    [
      genre,
      actor,
      director,
      country,
      year,
      setIsFilterOptionsSet,
      setSearchParams,
      setSearchInfo,
      setIsFirstPageLoad,
    ]
  );

  return (
    <form className="multi-filter" onSubmit={search}>
      <Selector
        className="genre"
        data={genres}
        currentOption={genre}
        setCurrentOption={setGenre}
      >
        Жанр
      </Selector>
      <Selector
        className="actor"
        data={actors}
        currentOption={actor}
        setCurrentOption={setActor}
      >
        Актор
      </Selector>
      <Selector
        className="director"
        data={directors}
        currentOption={director}
        setCurrentOption={setDirector}
      >
        Режисер
      </Selector>
      <Selector
        className="country"
        data={countries}
        currentOption={country}
        setCurrentOption={setCountry}
      >
        Країна
      </Selector>
      <Selector
        className="year"
        data={years}
        currentOption={year}
        setCurrentOption={setYear}
      >
        Рік
      </Selector>
      <PrimaryButton className="search-by-categories">
        Знайти фільм
      </PrimaryButton>
    </form>
  );
}

export default MultiFilter;
