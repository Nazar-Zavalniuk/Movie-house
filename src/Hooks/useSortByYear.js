import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../Utils/Sorting";

function useSortByYear() {
  const { setSearchParams, setSearchInfo } = useAppState();

  const sortByYear = useCallback(
    (year = "") => {
      setSearchParams(getSearchParams("id", "desc", 12, 1, ["year", year]));
      setSearchInfo({ sortByRating: false, info: `рік - ${year}` });
    },
    [setSearchInfo, setSearchParams]
  );

  return sortByYear;
}

export default useSortByYear;
