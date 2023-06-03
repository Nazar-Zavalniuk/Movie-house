import React from "react";
import "./SortingPanel.css";
import Filter from "../Filter/Filter";
import FilterInfo from "../FilterInfo/FilterInfo";

function SortingPanel(props) {
  return (
    <div className="sorting-panel">
      <div className="filter-panel">
        <Filter className="actors">Актори</Filter>
        <Filter className="producer">Режисер</Filter>
        <Filter className="country">Країна</Filter>
        <Filter className="year">Рік</Filter>
      </div>
      <FilterInfo />
    </div>
  );
}

export default SortingPanel;
