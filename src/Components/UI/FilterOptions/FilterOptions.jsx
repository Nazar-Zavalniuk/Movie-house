import React, { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

function FilterOptions({ filterData, className, ...props }) {
  const classNameSelect = classNames(className, "select");

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = useCallback(
    (e) => {
      setSelectedOption(e.target.value);
    },
    [setSelectedOption]
  );

  return (
    <select
      className={classNameSelect}
      id={className}
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option value="">...</option>
      {filterData.map((value) => {
        return (
          <option value={value} key={uuidv4()}>
            {value}
          </option>
        );
      })}
    </select>
  );
}

export default FilterOptions;
