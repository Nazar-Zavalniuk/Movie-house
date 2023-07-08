import { useState, useMemo } from "react";
import useFetching from "./useFetching";

function usePermanentMovies(fetchFunc, fetchParameter, dependency) {
  const [movies, setMovies] = useState([]);
  const [fetchMovies, isMoviesLoading, moviesError] = useFetching(async () => {
    const movies = await fetchFunc(fetchParameter);
    setMovies(movies);
  });

  useMemo(() => {
    fetchMovies();
  }, [dependency]);

  return [movies, isMoviesLoading, moviesError];
}

export default usePermanentMovies;
