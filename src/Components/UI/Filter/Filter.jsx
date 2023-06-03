import React from "react";
import "./Filter.css";
import classNames from "classnames";
import FilterOptions from "../FilterOptions/FilterOptions";

function Filter({ className, children, filterData = [], ...props }) {
  const classNameBlock = classNames(className, "filter");
  const classNameTitle = classNames(className, "filter-title");

  return (
    <div className={classNameBlock}>
      <label htmlFor={className} className={classNameTitle}>
        {children}
      </label>
      <FilterOptions filterData={filterData} className={className} />
    </div>
  );
}

export default Filter;
