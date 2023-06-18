import { useState, useEffect } from "react";
import useFetching from "./useFetching";
import { getPageCount } from "../Utils/Pages";
import MoviesService from "../API/MoviesService";

function useDynamicMovies(sortingParams) {
  const { _limit } = sortingParams;
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [fetchMovies, isMoviesLoading, moviesError] = useFetching(async () => {
    const response = await MoviesService.getAll(sortingParams);
    setMovies(response.data);

    const totalCount = response.headers["x-total-count"];
    setTotalCount(getPageCount(totalCount, _limit));
  });

  useEffect(() => {
    fetchMovies();
  }, [sortingParams]);

  return [movies, totalCount, isMoviesLoading, moviesError];
}

export default useDynamicMovies;
