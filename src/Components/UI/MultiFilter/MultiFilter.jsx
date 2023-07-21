import React, { useCallback, useEffect, useState } from "react";
import "./MultiFilter.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { directors, countries, years, genres } from "../../../Data/DataToSort";
import useAppState from "../../../Context/Hook/useAppState";
import Selector from "../Selector/Selector";
import { sortByAllOptions } from "../../../Utils/Sorting";

function MultiFilter({ setIsFilterOptionsSet, ...props }) {
  const { actors, sortingParams, setSortingParams } = useAppState();

  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");
  const [director, setDirector] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");

  const search = useCallback(
    (e) => {
      e.preventDefault();

      const options = {
        genre_like: genre,
        actors_like: actor,
        director_like: director,
        country_like: country,
        year: year,
      };

      function removeEmptyProperties(obj) {
        const filteredEntries = Object.entries(obj).filter(
          ([key, value]) => value !== ""
        );
        return Object.fromEntries(filteredEntries);
      }

      const filteredOptions = removeEmptyProperties(options);

      function isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
      }

      const optionsIsSet = !isEmptyObject(filteredOptions);

      if (optionsIsSet) {
        sortByAllOptions(setSortingParams, filteredOptions);
        setIsFilterOptionsSet(true);
      } else {
        setSortingParams({
          ...sortingParams,
          prevSortInfo: {
            sortByRating: false,
            info: "навігатор результати пошуку",
          },
          sortInfo: {
            sortByRating: false,
            info: "навігатор результати пошуку",
          },
        });
        setIsFilterOptionsSet(false);
      }
    },
    [
      genre,
      actor,
      director,
      country,
      year,
      sortingParams,
      setSortingParams,
      setIsFilterOptionsSet,
    ]
  );

  useEffect(() => {
    setGenre("");
    setActor("");
    setDirector("");
    setCountry("");
    setYear("");
    setIsFilterOptionsSet(false);
  }, []);

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
