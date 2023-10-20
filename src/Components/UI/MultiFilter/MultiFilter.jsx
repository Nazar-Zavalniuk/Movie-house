import React, { useCallback, useState } from "react";
import "./MultiFilter.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { directors, countries, years, genres } from "../../../Data/DataToSort";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import Selector from "../Selector/Selector";
import { createMultiFilterFormula } from "../../../Utils/CreateMultiFilterFormula";

function MultiFilter({ setIsFilterOptionsSet, setIsFirstPageLoad, ...props }) {
  const { actors, dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();

  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");
  const [director, setDirector] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");

  const search = useCallback(
    async (e) => {
      e.preventDefault();

      const isFilterOptionSet = (option) => option.value !== "";
      const filterOptions = [
        { field: "genres", value: genre },
        { field: "actors", value: actor },
        { field: "directors", value: director },
        { field: "countries", value: country },
        { field: "year", value: year },
      ];
      const isFilterOptionsSet = filterOptions.some(isFilterOptionSet);

      if (isFilterOptionsSet) {
        dispatchSearchParams({
          type: "change_search_params",
          params: {
            pageSize: 12,
            fields: ["title", "year", "coverImage", "rating", "id"],
            sort: null,
            offset: null,
            filterByFormula: createMultiFilterFormula(filterOptions),
          },
        });
        dispatchOffsetPages({ type: "reset" });
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
      dispatchSearchParams,
      dispatchOffsetPages,
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
