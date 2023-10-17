import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";

function useSortByDirector() {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();

  const sortByDirector = useCallback(
    (director = "") => {
      dispatchSearchParams({
        type: "change_search_params",
        params: {
          pageSize: 12,
          fields: ["title", "year", "coverImage", "id", "rating"],
          sort: [{ field: "year", direction: "desc" }],
          offset: null,
          filterByFormula: `SEARCH('${director}', {directors})`,
        },
      });
      dispatchOffsetPages({ type: "reset" });
      setSearchInfo({ sortByRating: false, info: `режисер - ${director}` });
    },
    [setSearchInfo, dispatchSearchParams, dispatchOffsetPages]
  );

  return sortByDirector;
}

export default useSortByDirector;
