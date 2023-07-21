import React from "react";
import "./MultiSortPanel.css";
import FilterInfo from "../FilterInfo/FilterInfo";
import MultiFilter from "../MultiFilter/MultiFilter";

function MultiSortPanel({ setIsFilterOptionsSet, ...props }) {
  return (
    <div className="multi-sort-panel">
      <FilterInfo />
      <MultiFilter setIsFilterOptionsSet={setIsFilterOptionsSet} />
    </div>
  );
}

export default MultiSortPanel;
