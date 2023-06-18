import React, { useState } from "react";
import { ContextApp } from "../ContextApp";
import useDynamicMovies from "../../Hooks/useDynamicMovies";
import usePermanentMovies from "../../Hooks/usePermanentMovies";
import MoviesService from "../../API/MoviesService";

function AppStateProvider({ children, ...props }) {
  const [sortingParams, setSortingParams] = useState({
    prevParams: {
      _limit: 12,
      _page: 1,
      _sort: "year,id",
      _order: "desc,desc",
    },
    prevSortInfo: { sortByRating: false, info: "новинки" },
    params: {
      _limit: 12,
      _page: 1,
      _sort: "year,id",
      _order: "desc,desc",
    },
    sortInfo: { sortByRating: false, info: "новинки" },
  });

  const [topMovies, isTopMoviesLoading, topMoviesError] = usePermanentMovies(
    MoviesService.getTopMovies,
    7
  );

  const [mainMovies, totalPages, isMainMoviesLoading, tainMoviesError] =
    useDynamicMovies(sortingParams.params);

  const [
    recommendedMovies,
    isRecommendedMoviesLoading,
    recommendedMoviesError,
  ] = usePermanentMovies(MoviesService.getRecommendedMovies, "фільм");

  const [
    recommendedSeries,
    isRecommendedSeriesLoading,
    recommendedSeriesError,
  ] = usePermanentMovies(MoviesService.getRecommendedMovies, "серіал");

  return (
    <ContextApp.Provider
      value={{
        sortingParams,
        setSortingParams,
        topMovies,
        isTopMoviesLoading,
        topMoviesError,
        mainMovies,
        totalPages,
        isMainMoviesLoading,
        tainMoviesError,
        recommendedMovies,
        isRecommendedMoviesLoading,
        recommendedMoviesError,
        recommendedSeries,
        isRecommendedSeriesLoading,
        recommendedSeriesError,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export default AppStateProvider;
