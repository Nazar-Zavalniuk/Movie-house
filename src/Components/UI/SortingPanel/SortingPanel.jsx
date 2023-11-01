import React, { useCallback } from "react";
import "./SortingPanel.css";
import FilterInfo from "../FilterInfo/FilterInfo";
import { countries, directors, years } from "../../../Data/DataToSort";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import useSortByYear from "../../../Hooks/useSortByYear";
import useSortByCountry from "../../../Hooks/useSortByCountry";
import useSortByDirector from "../../../Hooks/useSortByDirector";
import useSortByActor from "../../../Hooks/useSortByActor";
import Select from "../Select/Select";
import useSortByDefault from "../../../Hooks/useSortByDefault";

function SortingPanel({ ...props }) {
  const { actors, fetchActors, isActorsLoading, offsetActors } = useAppState();

  const sortByYear = useSortByYear();
  const sortByCountry = useSortByCountry();
  const sortByDirector = useSortByDirector();
  const sortByActor = useSortByActor();
  const sortByDefault = useSortByDefault();

  const onChangeActor = useCallback(
    (actor) => {
      if (actor === "") sortByDefault();
      else sortByActor(actor);
    },
    [sortByActor, sortByDefault]
  );

  const onChangeYear = useCallback(
    (year) => {
      if (year === "") sortByDefault();
      else sortByYear(year);
    },
    [sortByDefault, sortByYear]
  );

  const onChangeCountry = useCallback(
    (country) => {
      if (country === "") sortByDefault();
      else sortByCountry(country);
    },
    [sortByCountry, sortByDefault]
  );

  const onChangeDirector = useCallback(
    (director) => {
      if (director === "") sortByDefault();
      else sortByDirector(director);
    },
    [sortByDefault, sortByDirector]
  );

  return (
    <div className="sorting-panel">
      <div className="filter-panel">
        <Select
          className="actor-filter"
          label="Актор"
          data={actors}
          fetchFunc={fetchActors}
          isLoading={isActorsLoading}
          offset={offsetActors}
          onChange={onChangeActor}
        />
        <Select
          className="director-filter"
          label="Режисер"
          data={directors}
          onChange={onChangeDirector}
        />
        <Select
          className="country-filter"
          label="Країна"
          data={countries}
          onChange={onChangeCountry}
        />
        <Select
          className="year-filter"
          label="Рік"
          data={years}
          onChange={onChangeYear}
        />
      </div>
      <FilterInfo />
    </div>
  );
}

export default SortingPanel;
