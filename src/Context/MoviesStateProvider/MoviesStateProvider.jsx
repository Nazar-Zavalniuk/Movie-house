import React, { createContext, useCallback, useContext } from "react";
import useFetchingMovies from "../../Hooks/useFetchingMovies";
import MoviesService from "../../API/MoviesService";

const MoviesContext = createContext(null);

export function MoviesStateProvider({ children, ...props }) {
  const [
    fetchTopMovies,
    topMovies,
    isTopMoviesLoading,
    topMoviesError,
    setTopMoviesError,
  ] = useFetchingMovies(MoviesService.getTopMovies, 7);

  const [
    fetchRecommendedMovies,
    recommendedMovies,
    isRecommendedMoviesLoading,
    recommendedMoviesError,
    setRecommendedMoviesError,
  ] = useFetchingMovies(MoviesService.getRecommendedMovies, "movie");

  const [
    fetchRecommendedSeries,
    recommendedSeries,
    isRecommendedSeriesLoading,
    recommendedSeriesError,
    setRecommendedSeriesError,
  ] = useFetchingMovies(MoviesService.getRecommendedMovies, "tv-series");

  const clearMoviesErrors = useCallback(() => {
    const defaultErrorState = { errorState: false, errorMessage: "" };

    setTopMoviesError(defaultErrorState);
    setRecommendedMoviesError(defaultErrorState);
    setRecommendedSeriesError(defaultErrorState);
  }, [setTopMoviesError, setRecommendedMoviesError, setRecommendedSeriesError]);

  return (
    <MoviesContext.Provider
      value={{
        clearMoviesErrors,
        fetchTopMovies,
        topMovies,
        isTopMoviesLoading,
        topMoviesError,
        fetchRecommendedMovies,
        recommendedMovies,
        isRecommendedMoviesLoading,
        recommendedMoviesError,
        fetchRecommendedSeries,
        recommendedSeries,
        isRecommendedSeriesLoading,
        recommendedSeriesError,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMoviesState() {
  return useContext(MoviesContext);
}
