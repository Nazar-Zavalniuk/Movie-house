import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useMoviesState } from "../Context/MoviesStateProvider/MoviesStateProvider";
import { useEffect, useLayoutEffect } from "react";
import useFetchingMainMovies from "./useFetchingMainMovies";
import MoviesService from "../API/MoviesService";
import { useNavigate } from "react-router-dom";
import useSortByDefault from "./useSortByDefault";

function useHomepage() {
  const {
    searchInfo,
    searchParams,
    setSearchQueryValue,
    fetchActors,
    actors,
    actorsError,
    numReboots,
    setNumReboots,
    setAppError,
  } = useAppState();

  const {
    topMovies,
    recommendedMovies,
    recommendedSeries,
    topMoviesError,
    fetchTopMovies,
    fetchRecommendedMovies,
    fetchRecommendedSeries,
  } = useMoviesState();

  useEffect(() => {
    if (actors.length === 0) {
      fetchActors();
    }
    if (topMovies.length === 0) {
      fetchTopMovies();
    }
    if (recommendedMovies.length === 0) {
      fetchRecommendedMovies();
    }
    if (recommendedSeries.length === 0) {
      fetchRecommendedSeries();
    }
  }, [numReboots]);

  const [fetchMainMovies, mainMovies, isMainMoviesLoading, mainMoviesError] =
    useFetchingMainMovies(MoviesService.getAllMovies, searchParams);

  useEffect(() => {
    fetchMainMovies();
  }, [searchParams]);

  const { info } = searchInfo;
  const isSortByRecommended = info.includes("рекомендовані");
  const isMainMoviesEmpty = mainMovies.length === 0;

  useEffect(() => {
    if (!info.includes("результати пошуку")) setSearchQueryValue("");
  }, [setSearchQueryValue, info]);

  const sortByDefault = useSortByDefault();

  useLayoutEffect(() => {
    return () => {
      setSearchQueryValue("");
      setNumReboots(0);
      sortByDefault();
    };
  }, [setSearchQueryValue]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadingError =
      topMoviesError.errorState || mainMoviesError.errorState;

    if (loadingError) {
      const appError = [
        { ...topMoviesError, from: "Homepage - topMovies" },
        { ...mainMoviesError, from: "Homepage - mainMovies" },
      ];

      setAppError(appError);
      navigate("/error");
    }
  }, [actorsError, topMoviesError, mainMoviesError, navigate, setAppError]);

  return [
    mainMovies,
    isMainMoviesLoading,
    isSortByRecommended,
    isMainMoviesEmpty,
  ];
}

export default useHomepage;
