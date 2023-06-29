import React, { useCallback, useEffect, useRef } from "react";
import "./FilterInfo.css";
import { BsStarFill } from "react-icons/bs";
import classNames from "classnames";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByRating } from "../../../Utils/Sorting";

function FilterInfo({ ...props }) {
  const { sortingParams, setSortingParams, searchQueryValue } = useAppState();
  const { sortInfo } = sortingParams;

  const classNameStar = classNames("filter-star", {
    active: sortInfo.sortByRating,
  });
  const starTitle = sortInfo.sortByRating
    ? "Скасувати сортування"
    : "Cортувати за рейтингом";
  const infoTitle = useRef(null);

  useEffect(() => {
    infoTitle.current =
      searchQueryValue !== "" ? searchQueryValue : sortInfo.info;
  }, [searchQueryValue, sortInfo.info]);

  const handleToggle = useCallback(() => {
    sortByRating(setSortingParams, sortingParams);
  }, [setSortingParams, sortingParams]);

  return (
    <div className="filter-info">
      <BsStarFill
        className={classNameStar}
        title={starTitle}
        size={16}
        onClick={handleToggle}
      />
      <div className="filter-text-block">
        <div className="decor-filter-line" />
        <div className="filter-text" title={infoTitle.current}>
          {sortInfo.info}
        </div>
      </div>
    </div>
  );
}

export default FilterInfo;
