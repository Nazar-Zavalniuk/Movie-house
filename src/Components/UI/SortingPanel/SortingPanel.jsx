import React from "react";
import "./SortingPanel.css";
import Filter from "../Filter/Filter";
import FilterInfo from "../FilterInfo/FilterInfo";
import { countries, directors, years } from "../../../Data/DataToSort";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import useSortByYear from "../../../Hooks/useSortByYear";
import useSortByCountry from "../../../Hooks/useSortByCountry";
import useSortByDirector from "../../../Hooks/useSortByDirector";
import useSortByActor from "../../../Hooks/useSortByActor";

function SortingPanel({ ...props }) {
  const { actors } = useAppState();

  const sortByYear = useSortByYear();
  const sortByCountry = useSortByCountry();
  const sortByDirector = useSortByDirector();
  const sortByActor = useSortByActor();

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
