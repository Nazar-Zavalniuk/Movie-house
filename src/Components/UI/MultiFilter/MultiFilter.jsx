import React, { useCallback, useState } from "react";
import "./MultiFilter.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { directors, countries, years, genres } from "../../../Data/DataToSort";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import Select from "../Select/Select";
import { createMultiFilterFormula } from "../../../Utils/CreateMultiFilterFormula";

function MultiFilter({ setIsFilterOptionsSet, setIsFirstPageLoad, ...props }) {
  const {
    actors,
    fetchActors,
    isActorsLoading,
    offsetActors,
    dispatchSearchParams,
    dispatchOffsetPages,
    setSearchInfo,
  } = useAppState();

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
      <Select
        className="genre"
        label="Жанр"
        data={genres}
        isSelectForMultiSelector={true}
        onChange={setGenre}
      />
      <Select
        className="actor"
        label="Актор"
        data={actors}
        fetchFunc={fetchActors}
        isLoading={isActorsLoading}
        offset={offsetActors}
        isSelectForMultiSelector={true}
        onChange={setActor}
      />
      <Select
        className="director"
        label="Режисер"
        data={directors}
        isSelectForMultiSelector={true}
        onChange={setDirector}
      />
      <Select
        className="country"
        label="Країна"
        data={countries}
        isSelectForMultiSelector={true}
        onChange={setCountry}
      />
      <Select
        className="year"
        label="Рік"
        data={years}
        isSelectForMultiSelector={true}
        onChange={setYear}
      />
      <PrimaryButton className="search-by-categories">
        Знайти фільм
      </PrimaryButton>
    </form>
  );
}

export default MultiFilter;
