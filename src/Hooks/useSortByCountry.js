import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";

function useSortByCountry() {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();

  const sortByCountry = useCallback(
    (country = "") => {
      dispatchSearchParams({
        type: "change_search_params",
        params: {
          pageSize: 12,
          fields: ["title", "year", "coverImage", "id", "rating"],
          sort: [{ field: "year", direction: "desc" }],
          offset: null,
          filterByFormula: `SEARCH("${country}", {countries})`,
        },
      });
      dispatchOffsetPages({ type: "reset" });
      setSearchInfo({ sortByRating: false, info: `країна - ${country}` });
    },
    [dispatchSearchParams, dispatchOffsetPages, setSearchInfo]
  );

  return sortByCountry;
}

export default useSortByCountry;
