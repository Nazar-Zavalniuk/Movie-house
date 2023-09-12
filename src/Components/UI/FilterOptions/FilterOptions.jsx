import React, { useCallback, useEffect, useState } from "react";
import "./FilterOptions.css";
import classNames from "classnames";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function FilterOptions({ filterData, className, sortByOption, ...props }) {
  const classNameSelect = classNames(className, "select");

  const [selectedOption, setSelectedOption] = useState("");
  const { searchInfo, setSearchInfo, setSearchParams } = useAppState();
  const { info } = searchInfo;

  useEffect(() => {
    if (!info.includes(selectedOption)) setSelectedOption("");
  }, [info, setSelectedOption, selectedOption]);

  const handleSelectChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSelectedOption(value);

      if (value !== "") sortByOption(value);
      else {
        setSearchParams({
          _sort: "id",
          _order: "desc",
          _limit: 12,
          _page: 1,
        });
        setSearchInfo({
          sortByRating: false,
          info: "нове на сайті",
        });
      }
    },
    [sortByOption, setSearchParams, setSelectedOption, setSearchInfo]
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
