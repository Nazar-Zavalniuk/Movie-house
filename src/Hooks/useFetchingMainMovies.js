import { useState } from "react";
import useFetching from "./useFetching";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";

function useFetchingMainMovies(fetchFunc, searchParams) {
  const { offsetPages, dispatchOffsetPages } = useAppState();
  const [moviesData, setMoviesData] = useState([]);
  const [fetchMovies, isMoviesLoading, moviesError] = useFetching(async () => {
    const response = await fetchFunc(searchParams);
    const movies = response.data.records.map((record) => record.fields);
    setMoviesData(movies);

    const newOffset = response.data.offset;
    const addOffset = newOffset && !offsetPages.includes(newOffset);

    if (addOffset) {
      dispatchOffsetPages({ type: "added", offset: newOffset });
    } else if (!newOffset) {
      dispatchOffsetPages({ type: "added", offset: null });
    }
  });

  return [fetchMovies, moviesData, isMoviesLoading, moviesError];
}

export default useFetchingMainMovies;
