import React from "react";
import "./MultiSortPanel.css";
import FilterInfo from "../FilterInfo/FilterInfo";
import MultiFilter from "../MultiFilter/MultiFilter";

function MultiSortPanel({
  setIsFilterOptionsSet,
  setIsFirstPageLoad,
  ...props
}) {
  return (
    <div className="multi-sort-panel">
      <FilterInfo />
      <MultiFilter
        setIsFilterOptionsSet={setIsFilterOptionsSet}
        setIsFirstPageLoad={setIsFirstPageLoad}
      />
    </div>
  );
}

export default MultiSortPanel;
