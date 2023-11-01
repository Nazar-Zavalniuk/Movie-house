import React, { useCallback, useState } from "react";
import "./FilterInfo.css";
import { BsStarFill } from "react-icons/bs";
import classNames from "classnames";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function FilterInfo({ ...props }) {
  const {
    searchParams,
    dispatchSearchParams,
    dispatchOffsetPages,
    searchQueryValue,
    searchInfo,
    setSearchInfo,
    isRatingSortUnavailable,
    setShowRatingSortWarning,
  } = useAppState();
  const { sortByRating, info } = searchInfo;

  const [prevSortParams, setPrevSortParams] = useState(null);
  const [prevSearchInfo, setPrevSearchInfo] = useState(null);

  const { sort } = searchParams;

  const handleToggle = useCallback(() => {
    if (isRatingSortUnavailable) {
      setShowRatingSortWarning(true);
      return;
    }

    if (!sortByRating) {
      setPrevSortParams(sort);
      setPrevSearchInfo(searchInfo);

      const newSortParams = sort
        ? [{ field: "rating", direction: "desc" }, ...sort]
        : [{ field: "rating", direction: "desc" }];

      dispatchSearchParams({
        type: "change_sort_params",
        params: newSortParams,
      });
      dispatchOffsetPages({ type: "reset" });
      setSearchInfo({ sortByRating: true, info: `${info}, за рейтингом` });
    } else {
      dispatchSearchParams({
        type: "change_sort_params",
        params: prevSortParams,
      });
      dispatchOffsetPages({ type: "reset" });
      setSearchInfo(prevSearchInfo);
      setPrevSortParams(null);
      setPrevSearchInfo(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    prevSearchInfo,
    prevSortParams,
    searchInfo,
    sort,
    setSearchInfo,
    dispatchSearchParams,
    dispatchOffsetPages,
    isRatingSortUnavailable,
    setShowRatingSortWarning,
  ]);

  const classNameStar = classNames("filter-star", {
    active: sortByRating,
  });
  const starTitle = sortByRating
    ? "Скасувати сортування за рейтингом"
    : "Cортувати за рейтингом";

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
        <div className="filter-text" title={info}>
          {searchQueryValue !== "" && searchQueryValue.length > 50
            ? `результати пошуку - "${searchQueryValue.slice(0, 47)}..."${
                sortByRating ? ", за рейтингом" : ""
              }`
            : info}
        </div>
      </div>
    </div>
  );
}

export default FilterInfo;
