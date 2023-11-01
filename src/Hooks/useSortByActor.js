import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";

function useSortByActor() {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();

  const sortByActor = useCallback(
    (actor = "") => {
      dispatchSearchParams({
        type: "change_search_params",
        params: {
          pageSize: 12,
          fields: ["title", "year", "coverImage", "id", "rating"],
          sort: [{ field: "year", direction: "desc" }],
          offset: null,
          filterByFormula: `SEARCH("${actor}", {actors})`,
        },
      });
      dispatchOffsetPages({ type: "reset" });
      setSearchInfo({ sortByRating: false, info: `актор - ${actor}` });
    },
    [dispatchSearchParams, dispatchOffsetPages, setSearchInfo]
  );

  return sortByActor;
}

export default useSortByActor;
