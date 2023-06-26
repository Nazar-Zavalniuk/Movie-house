import React from "react";
import "./SortingPanel.css";
import Filter from "../Filter/Filter";
import FilterInfo from "../FilterInfo/FilterInfo";
import { countries, directors, years } from "../../../Data/DataToSort";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByOption } from "../../../Utils/Sorting";

function SortingPanel({ ...props }) {
  const { setSortingParams, actors } = useAppState();

  function sortByYear(year) {
    sortByOption(setSortingParams, "year", year);
  }

  function sortByCountry(country) {
    sortByOption(setSortingParams, "country", country);
  }

  function sortByDirector(director) {
    sortByOption(setSortingParams, "director", director);
  }

  function sortByActor(actor) {
    sortByOption(setSortingParams, "actor", actor);
  }

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
