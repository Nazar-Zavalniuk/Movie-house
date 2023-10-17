import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";

function useSortByDefault() {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();

  const sortByDefault = useCallback(() => {
    dispatchSearchParams({ type: "reset" });
    dispatchOffsetPages({ type: "reset" });
    setSearchInfo({ sortByRating: false, info: "нове на сайті" });
  }, [setSearchInfo, dispatchSearchParams, dispatchOffsetPages]);

  return sortByDefault;
}

export default useSortByDefault;
