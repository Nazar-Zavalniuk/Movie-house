import React, { useCallback } from "react";
import "./FilterInfo.css";
import { BsStarFill } from "react-icons/bs";
import classNames from "classnames";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByRating } from "../../../Utils/Sorting";

function FilterInfo({ ...props }) {
  const { sortingParams, setSortingParams } = useAppState();
  const { sortInfo } = sortingParams;

  const classNameStar = classNames("filter-star", {
    active: sortInfo.sortByRating,
  });
  const starTitle = sortInfo.sortByRating
    ? "Скасувати сортування"
    : "Cортувати за рейтингом";

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
        <div className="filter-text">{sortInfo.info}</div>
      </div>
    </div>
  );
}

export default FilterInfo;
