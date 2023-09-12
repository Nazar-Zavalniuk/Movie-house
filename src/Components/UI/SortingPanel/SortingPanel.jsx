import React, { useCallback } from "react";
import "./SortingPanel.css";
import Filter from "../Filter/Filter";
import FilterInfo from "../FilterInfo/FilterInfo";
import { countries, directors, years } from "../../../Data/DataToSort";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../../../Utils/Sorting";

function SortingPanel({ ...props }) {
  const { setSearchParams, setSearchInfo, actors } = useAppState();

  const sortByYear = useCallback(
    (year) => {
      setSearchParams(getSearchParams("id", "desc", 12, 1, ["year", year]));
      setSearchInfo({ sortByRating: false, info: `рік - ${year}` });
    },
    [setSearchParams, setSearchInfo]
  );

  const sortByCountry = useCallback(
    (country) => {
      setSearchParams(
        getSearchParams("year", "desc", 12, 1, ["country_like", country])
      );
      setSearchInfo({ sortByRating: false, info: `країна - ${country}` });
    },
    [setSearchParams, setSearchInfo]
  );

  const sortByDirector = useCallback(
    (director) => {
      setSearchParams(
        getSearchParams("year", "desc", 12, 1, ["director_like", director])
      );
      setSearchInfo({ sortByRating: false, info: `режисер - ${director}` });
    },
    [setSearchParams, setSearchInfo]
  );

  const sortByActor = useCallback(
    (actor) => {
      setSearchParams(
        getSearchParams("year", "desc", 12, 1, ["actors_like", actor])
      );
      setSearchInfo({ sortByRating: false, info: `актор - ${actor}` });
    },
    [setSearchParams, setSearchInfo]
  );

  return (
    <div className="sorting-panel">
      <div className="filter-panel">
        <Filter
          className="actor-filter"
          filterData={actors}
          sortByOption={sortByActor}
        >
          Актор
        </Filter>
        <Filter
          className="director-filter"
          filterData={directors}
          sortByOption={sortByDirector}
        >
          Режисер
        </Filter>
        <Filter
          className="country-filter"
          filterData={countries}
          sortByOption={sortByCountry}
        >
          Країна
        </Filter>
        <Filter
          className="year-filter"
          filterData={years}
          sortByOption={sortByYear}
        >
          Рік
        </Filter>
      </div>
      <FilterInfo />
    </div>
  );
}

export default SortingPanel;
