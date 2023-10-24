import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";

function useSortByGenre() {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();

  const sortByGenres = useCallback(
    (genre = "") => {
      dispatchSearchParams({
        type: "change_search_params",
        params: {
          pageSize: 12,
          fields: ["title", "year", "coverImage", "id", "rating"],
          sort: [{ field: "year", direction: "desc" }],
          offset: null,
          filterByFormula: `SEARCH('${genre}', {genres})`,
        },
      });
      dispatchOffsetPages({ type: "reset" });
      setSearchInfo({ sortByRating: false, info: `жанр - ${genre}` });
    },
    [setSearchInfo, dispatchSearchParams, dispatchOffsetPages]
  );

  return sortByGenres;
}

export default useSortByGenre;
