import { useState } from "react";
import useAdvancedFetching from "./useAdvancedFetching";

function useFetchingMovies(fetchFunc, fetchParameter) {
  const [movies, setMovies] = useState([]);
  const [fetchMovies, isMoviesLoading, moviesError, setMoviesError] =
    useAdvancedFetching(async () => {
      const response = await fetchFunc(fetchParameter);
      const movies = response.data.records.map((record) => record.fields);
      setMovies(movies);
    });

  return [fetchMovies, movies, isMoviesLoading, moviesError, setMoviesError];
}

export default useFetchingMovies;
