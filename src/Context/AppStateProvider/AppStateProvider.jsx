import React, { useState } from "react";
import { ContextApp } from "../ContextApp";
import useDynamicMovies from "../../Hooks/useDynamicMovies";
import usePermanentMovies from "../../Hooks/usePermanentMovies";
import MoviesService from "../../API/MoviesService";
import useActors from "../../Hooks/useActors";

function AppStateProvider({ children, ...props }) {
  const [sortingParams, setSortingParams] = useState({
    prevParams: {
      _limit: 12,
      _page: 1,
      _sort: "id",
      _order: "desc",
    },
    prevSortInfo: { sortByRating: false, info: "нове на сайті" },
    params: {
      _limit: 12,
      _page: 1,
      _sort: "id",
      _order: "desc",
    },
    sortInfo: { sortByRating: false, info: "нове на сайті" },
  });

  const [searchQueryValue, setSearchQueryValue] = useState("");

  const [actors, isActorsLoad, actorsError] = useActors(
    MoviesService.getAllActors
  );

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
  ] = usePermanentMovies(MoviesService.getRecommendedMovies, "movie");

  const [
    recommendedSeries,
    isRecommendedSeriesLoading,
    recommendedSeriesError,
  ] = usePermanentMovies(MoviesService.getRecommendedMovies, "tv-series");

  return (
    <ContextApp.Provider
      value={{
        sortingParams,
        setSortingParams,
        searchQueryValue,
        setSearchQueryValue,
        actors,
        isActorsLoad,
        actorsError,
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
