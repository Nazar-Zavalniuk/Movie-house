import { useState, useMemo } from "react";
import useFetching from "./useFetching";

function usePermanentMovies(fetchFunc, ...fetchParams) {
  const [movies, setMovies] = useState([]);
  const [fetchMovies, isMoviesLoading, moviesError] = useFetching(async () => {
    const movies = await fetchFunc(...fetchParams);
    setMovies(movies);
  });

  useMemo(() => {
    fetchMovies();
  }, []);

  return [movies, isMoviesLoading, moviesError];
}

export default usePermanentMovies;
