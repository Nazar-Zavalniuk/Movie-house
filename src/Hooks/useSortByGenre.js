import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../Utils/Sorting";

function useSortByGenre() {
  const { setSearchParams, setSearchInfo } = useAppState();

  const sortByGenres = useCallback(
    (genre = "") => {
      setSearchParams(
        getSearchParams("year,id", "desc,desc", 12, 1, ["genre_like", genre])
      );
      setSearchInfo({ sortByRating: false, info: `жанр - ${genre}` });
    },
    [setSearchInfo, setSearchParams]
  );

  return sortByGenres;
}

export default useSortByGenre;
