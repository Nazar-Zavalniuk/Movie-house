import { useState } from "react";
import useFetching from "./useFetching";
import { getPageCount } from "../Utils/Pages";

function useFetchingMainMovies(fetchFunc, searchParams) {
  const { _limit } = searchParams;
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [fetchMovies, isMoviesLoading, moviesError] = useFetching(async () => {
    const response = await fetchFunc(searchParams);
    setMovies(response.data);

    const totalCount = response.headers["x-total-count"];
    setTotalCount(getPageCount(totalCount, _limit));
  });

  return [fetchMovies, movies, totalCount, isMoviesLoading, moviesError];
}

export default useFetchingMainMovies;
