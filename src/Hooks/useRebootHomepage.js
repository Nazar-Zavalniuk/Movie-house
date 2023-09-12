import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useCallback } from "react";
import { useMoviesState } from "../Context/MoviesStateProvider/MoviesStateProvider";

function useRebootHomepage() {
  const {
    numReboots,
    setNumReboots,
    setSearchParams,
    setSearchInfo,
    clearActorsErrors,
    setAppError,
  } = useAppState();

  const { clearMoviesErrors } = useMoviesState();

  const rebootHomepage = useCallback(() => {
    setNumReboots(numReboots + 1);
    setSearchParams({
      _sort: "id",
      _order: "desc",
      _limit: 12,
      _page: 1,
    });
    setSearchInfo({
      sortByRating: false,
      info: "нове на сайті",
    });
    clearMoviesErrors();
    clearActorsErrors();
    setAppError(null);
  }, [
    clearActorsErrors,
    clearMoviesErrors,
    numReboots,
    setNumReboots,
    setSearchInfo,
    setSearchParams,
    setAppError,
  ]);

  return rebootHomepage;
}

export default useRebootHomepage;
