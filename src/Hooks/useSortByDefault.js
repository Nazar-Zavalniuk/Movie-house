import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../Utils/Sorting";

function useSortByDefault() {
  const { setSearchParams, setSearchInfo } = useAppState();

  const sortByDefault = useCallback(() => {
    setSearchParams(getSearchParams("id", "desc", 12, 1));
    setSearchInfo({ sortByRating: false, info: "нове на сайті" });
  }, [setSearchInfo, setSearchParams]);

  return sortByDefault;
}

export default useSortByDefault;
