import React, { useCallback, useEffect, useState } from "react";
import "./FilterOptions.css";
import classNames from "classnames";
import { sortByNewOnSite } from "../../../Utils/Sorting";
import useAppState from "../../../Context/Hook/useAppState";

function FilterOptions({ filterData, className, sortByOption, ...props }) {
  const classNameSelect = classNames(className, "select");

  const [selectedOption, setSelectedOption] = useState("");
  const { sortingParams, setSortingParams } = useAppState();
  const { info } = sortingParams.sortInfo;

  useEffect(() => {
    if (!info.includes(selectedOption)) setSelectedOption("");
  }, [info, setSelectedOption, selectedOption]);

  const handleSelectChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSelectedOption(value);

      if (value !== "") sortByOption(value);
      else sortByNewOnSite(setSortingParams);
    },
    [sortByOption, setSortingParams, setSelectedOption]
  );

  return (
    <select
      className={classNameSelect}
      id={className}
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option value="">...</option>
      {filterData.map((value, index) => {
        return (
          <option value={value} key={index}>
            {value}
          </option>
        );
      })}
    </select>
  );
}

export default FilterOptions;
