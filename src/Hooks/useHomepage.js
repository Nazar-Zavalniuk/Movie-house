import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useMoviesState } from "../Context/MoviesStateProvider/MoviesStateProvider";
import { useEffect } from "react";
import useFetchingMainMovies from "./useFetchingMainMovies";
import MoviesService from "../API/MoviesService";
import { useNavigate } from "react-router-dom";

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
    if (actors.length === 0 || numReboots !== 0) {
      fetchActors();
    }
    if (topMovies.length === 0 || numReboots !== 0) {
      fetchTopMovies();
    }
    if (recommendedMovies.length === 0 || numReboots !== 0) {
      fetchRecommendedMovies();
    }
    if (recommendedSeries.length === 0 || numReboots !== 0) {
      fetchRecommendedSeries();
    }
  }, [numReboots]);

  const [
    fetchMainMovies,
    mainMovies,
    totalPages,
    isMainMoviesLoading,
    mainMoviesError,
  ] = useFetchingMainMovies(MoviesService.getAllMovies, searchParams);

  useEffect(() => {
    fetchMainMovies();
  }, [searchParams]);

  const { info } = searchInfo;
  const isSortByRecommended = info.includes("рекомендовані");
  const isMainMoviesEmpty = mainMovies.length === 0;

  useEffect(() => {
    if (!info.includes("результати пошуку")) setSearchQueryValue("");
  }, [setSearchQueryValue, info]);

  useEffect(() => {
    return () => {
      setSearchQueryValue("");
      setNumReboots(0);
    };
  }, [setSearchQueryValue]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadingError =
      actorsError.errorState ||
      topMoviesError.errorState ||
      mainMoviesError.errorState;

    if (loadingError) {
      const appError = [
        { ...actorsError, from: "Homepage - actors" },
        { ...topMoviesError, from: "Homepage - topMovies" },
        { ...mainMoviesError, from: "Homepage - mainMovies" },
      ];

      setAppError(appError);
      navigate("/error");
    }
  }, [actorsError, topMoviesError, mainMoviesError, navigate, setAppError]);

  return [
    mainMovies,
    totalPages,
    isMainMoviesLoading,
    isSortByRecommended,
    isMainMoviesEmpty,
  ];
}

export default useHomepage;
