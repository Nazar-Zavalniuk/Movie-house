import React, { useCallback, useState } from "react";
import "./FilterInfo.css";
import { BsStarFill } from "react-icons/bs";
import classNames from "classnames";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function FilterInfo({ ...props }) {
  const {
    searchParams,
    setSearchParams,
    searchQueryValue,
    searchInfo,
    setSearchInfo,
    isRatingSortUnavailable,
    setShowRatingSortWarning,
  } = useAppState();
  const { sortByRating, info } = searchInfo;

  const [prevSearchParams, setPrevSearchParams] = useState(null);
  const [prevSearchInfo, setPrevSearchInfo] = useState(null);

  const { _sort, _order } = searchParams;

  const handleToggle = useCallback(() => {
    if (isRatingSortUnavailable) {
      setShowRatingSortWarning(true);
      return;
    }

    if (!sortByRating) {
      setPrevSearchParams(searchParams);
      setPrevSearchInfo(searchInfo);

      const newSearchParams = {
        ...searchParams,
        _sort: _sort ? `rating,${_sort}` : "rating",
        _order: _order ? `desc,${_order}` : "desc",
        _page: 1,
      };

      setSearchParams(newSearchParams);
      setSearchInfo({ sortByRating: true, info: `${info}, за рейтингом` });
    } else {
      setSearchParams({ ...prevSearchParams, _page: 1 });
      setSearchInfo(prevSearchInfo);
      setPrevSearchParams(null);
      setPrevSearchInfo(null);
    }
  }, [
    prevSearchInfo,
    prevSearchParams,
    searchInfo,
    searchParams,
    setSearchInfo,
    setSearchParams,
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
