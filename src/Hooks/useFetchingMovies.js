import { useState } from "react";
import useAdvancedFetching from "./useAdvancedFetching";

function useFetchingMovies(fetchFunc, fetchParameter) {
  const [movies, setMovies] = useState([]);
  const [fetchMovies, isMoviesLoading, moviesError, setMoviesError] =
    useAdvancedFetching(async () => {
      const movies = await fetchFunc(fetchParameter);
      setMovies(movies);
    });

  return [fetchMovies, movies, isMoviesLoading, moviesError, setMoviesError];
}

export default useFetchingMovies;
