import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../Utils/Sorting";

function useSortByActor() {
  const { setSearchParams, setSearchInfo } = useAppState();

  const sortByActor = useCallback(
    (actor = "") => {
      setSearchParams(
        getSearchParams("year", "desc", 12, 1, ["actors_like", actor])
      );
      setSearchInfo({ sortByRating: false, info: `актор - ${actor}` });
    },
    [setSearchInfo, setSearchParams]
  );

  return sortByActor;
}

export default useSortByActor;
