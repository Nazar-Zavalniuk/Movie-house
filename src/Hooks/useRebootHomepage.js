import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useCallback } from "react";
import { useMoviesState } from "../Context/MoviesStateProvider/MoviesStateProvider";
import useSortByDefault from "./useSortByDefault";

function useRebootHomepage() {
  const { numReboots, setNumReboots, clearActorsErrors, setAppError } =
    useAppState();

  const { clearMoviesErrors } = useMoviesState();
  const sortByDefault = useSortByDefault();

  const rebootHomepage = useCallback(() => {
    setNumReboots(numReboots + 1);
    sortByDefault();
    clearMoviesErrors();
    clearActorsErrors();
    setAppError(null);
  }, [
    setNumReboots,
    numReboots,
    sortByDefault,
    clearMoviesErrors,
    clearActorsErrors,
    setAppError,
  ]);

  return rebootHomepage;
}

export default useRebootHomepage;
