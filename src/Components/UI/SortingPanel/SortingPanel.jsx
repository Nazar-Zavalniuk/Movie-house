import React from "react";
import "./SortingPanel.css";
import Filter from "../Filter/Filter";
import FilterInfo from "../FilterInfo/FilterInfo";

function SortingPanel({ ...props }) {
  return (
    <div className="sorting-panel">
      <div className="filter-panel">
        <Filter className="actors-filter">Актори</Filter>
        <Filter className="producer-filter">Режисер</Filter>
        <Filter className="country-filter">Країна</Filter>
        <Filter className="year-filter">Рік</Filter>
      </div>
      <FilterInfo />
    </div>
  );
}

export default SortingPanel;
