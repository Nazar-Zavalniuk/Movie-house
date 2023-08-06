import React, { useState, useEffect, useLayoutEffect } from "react";
import "./MoviePage.css";
import Header from "../../Components/UI/Header/Header";
import { useParams, Navigate } from "react-router-dom";
import TopMovies from "../../Components/UI/TopMovies/TopMovies";
import NavBar from "../../Components/UI/NavBar/NavBar";
import PrimarySideBar from "../../Components/UI/PrimarySideBar/PrimarySideBar";
import Footer from "../../Components/UI/Footer/Footer";
import MovieInfo from "../../Components/UI/MovieInfo/MovieInfo";
import MoviesService from "../../API/MoviesService";
import useFetching from "../../Hooks/useFetching";
import { scroll } from "../../API/Scroll";
import MovieInfoSkeleton from "../../Components/UI/MovieInfoSkeleton/MovieInfoSkeleton";
import useAppState from "../../Context/Hook/useAppState";
import AuthRatingModal from "../../Components/UI/ModalWindows/AuthRatingModal/AuthRatingModal";

function MoviePage(props) {
  const { setCurrentMovieError, topMoviesError } = useAppState();
  const movieId = useParams().id;

  const [movieData, setMovieData] = useState(null);
  const [fetchMovieData, isMovieDataLoading, movieError] = useFetching(
    async () => {
      const response = await MoviesService.getById(movieId);
      setMovieData(response);
    }
  );

  useEffect(() => {
    fetchMovieData();
  }, [movieId]);

  const [thereAreErrors, setThereAreErrors] = useState(null);

  useEffect(() => {
    setCurrentMovieError(movieError);
    setThereAreErrors(topMoviesError.errorState || movieError.errorState);
  }, [movieError, setCurrentMovieError, topMoviesError.errorState]);

  useLayoutEffect(() => scroll("top", 0, "auto"), [movieData]);

  if (thereAreErrors && !isMovieDataLoading)
    return <Navigate to="/error" replace />;

  return (
    <div className="movie-page page">
      <Header />
      <TopMovies />
      <NavBar />
      {movieData !== null && !isMovieDataLoading ? (
        <MovieInfo movieData={movieData} />
      ) : (
        <MovieInfoSkeleton />
      )}
      <PrimarySideBar />
      <Footer />
      <AuthRatingModal />
    </div>
  );
}

export default MoviePage;
