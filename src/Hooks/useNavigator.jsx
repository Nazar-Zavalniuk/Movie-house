import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useMoviesState } from "../Context/MoviesStateProvider/MoviesStateProvider";
import { useEffect, useLayoutEffect } from "react";
import useFetchingMainMovies from "./useFetchingMainMovies";
import MoviesService from "../API/MoviesService";
import { useNavigate } from "react-router-dom";

function useNavigator(isFilterOptionsSet) {
  const {
    setSearchInfo,
    searchParams,
    fetchActors,
    actors,
    actorsError,
    setAppError,
  } = useAppState();

  const {
    fetchTopMovies,
    topMovies,
    topMoviesError,
    fetchRecommendedMovies,
    recommendedMovies,
    fetchRecommendedSeries,
    recommendedSeries,
  } = useMoviesState();

  useEffect(() => {
    if (actors.length === 0) fetchActors();
    if (topMovies.length === 0) fetchTopMovies();
    if (recommendedMovies.length === 0) fetchRecommendedMovies();
    if (recommendedSeries.length === 0) fetchRecommendedSeries();
  }, []);

  const [fetchMainMovies, mainMovies, isMainMoviesLoading, mainMoviesError] =
    useFetchingMainMovies(MoviesService.getAllMovies, searchParams);

  useEffect(() => {
    if (isFilterOptionsSet) {
      fetchMainMovies();
    }
  }, [searchParams]);

  const isMainMoviesEmpty = mainMovies.length === 0;

  const navigate = useNavigate();

  useEffect(() => {
    const loadingError =
      topMoviesError.errorState || mainMoviesError.errorState;

    if (loadingError) {
      const appError = [
        { ...topMoviesError, from: "Navigator - topMovies" },
        { ...mainMoviesError, from: "Navigator - mainMovies" },
      ];

      setAppError(appError);
      navigate("/error");
    }
  }, [actorsError, mainMoviesError, navigate, setAppError, topMoviesError]);

  useLayoutEffect(() => {
    setSearchInfo({ sortByRating: false, info: "навігатор" });
  }, []);

  return [mainMovies, isMainMoviesLoading, isMainMoviesEmpty];
}

export default useNavigator;
