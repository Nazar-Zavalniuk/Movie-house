import React, { useState } from "react";
import { ContextApp } from "../ContextApp";
import useDynamicMovies from "../../Hooks/useDynamicMovies";
import usePermanentMovies from "../../Hooks/usePermanentMovies";
import MoviesService from "../../API/MoviesService";
import useActors from "../../Hooks/useActors";

function AppStateProvider({ children, ...props }) {
  const [numReboots, setNumReboots] = useState(0);
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

  const [actors, isActorsLoading, actorsError] = useActors(
    MoviesService.getAllActors,
    numReboots
  );

  const [topMovies, isTopMoviesLoading, topMoviesError] = usePermanentMovies(
    MoviesService.getTopMovies,
    7,
    numReboots
  );

  const [mainMovies, totalPages, isMainMoviesLoading, mainMoviesError] =
    useDynamicMovies(sortingParams.params);

  const [
    recommendedMovies,
    isRecommendedMoviesLoading,
    recommendedMoviesError,
  ] = usePermanentMovies(
    MoviesService.getRecommendedMovies,
    "movie",
    numReboots
  );

  const [
    recommendedSeries,
    isRecommendedSeriesLoading,
    recommendedSeriesError,
  ] = usePermanentMovies(
    MoviesService.getRecommendedMovies,
    "tv-series",
    numReboots
  );

  const [currentMovieError, setCurrentMovieError] = useState(null);

  const [showAuthRatingModal, setShowAuthRatingModal] = useState(false);

  return (
    <ContextApp.Provider
      value={{
        numReboots,
        setNumReboots,
        sortingParams,
        setSortingParams,
        searchQueryValue,
        setSearchQueryValue,
        actors,
        isActorsLoading,
        actorsError,
        topMovies,
        isTopMoviesLoading,
        topMoviesError,
        mainMovies,
        totalPages,
        isMainMoviesLoading,
        mainMoviesError,
        recommendedMovies,
        isRecommendedMoviesLoading,
        recommendedMoviesError,
        recommendedSeries,
        isRecommendedSeriesLoading,
        recommendedSeriesError,
        currentMovieError,
        setCurrentMovieError,
        showAuthRatingModal,
        setShowAuthRatingModal,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export default AppStateProvider;
