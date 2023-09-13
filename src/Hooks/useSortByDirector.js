import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../Utils/Sorting";

function useSortByDirector() {
  const { setSearchParams, setSearchInfo } = useAppState();

  const sortByDirector = useCallback(
    (director = "") => {
      setSearchParams(
        getSearchParams("year", "desc", 12, 1, ["director_like", director])
      );
      setSearchInfo({ sortByRating: false, info: `режисер - ${director}` });
    },
    [setSearchInfo, setSearchParams]
  );

  return sortByDirector;
}

export default useSortByDirector;
