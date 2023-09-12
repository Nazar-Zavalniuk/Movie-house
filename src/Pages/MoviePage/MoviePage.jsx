import React, { useState, useEffect, useLayoutEffect } from "react";
import "./MoviePage.css";
import Header from "../../Components/UI/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import TopMovies from "../../Components/UI/TopMovies/TopMovies";
import NavBar from "../../Components/UI/NavBar/NavBar";
import PrimarySideBar from "../../Components/UI/PrimarySideBar/PrimarySideBar";
import Footer from "../../Components/UI/Footer/Footer";
import MovieInfo from "../../Components/UI/MovieInfo/MovieInfo";
import MoviesService from "../../API/MoviesService";
import useFetching from "../../Hooks/useFetching";
import { scroll } from "../../API/Scroll";
import MovieInfoSkeleton from "../../Components/UI/MovieInfoSkeleton/MovieInfoSkeleton";
import { useAppState } from "../../Context/AppStateProvider/AppStateProvider";
import AuthRatingModal from "../../Components/UI/ModalWindows/AuthRatingModal/AuthRatingModal";
import { useMoviesState } from "../../Context/MoviesStateProvider/MoviesStateProvider";

function MoviePage(props) {
  const { setAppError } = useAppState();
  const { fetchTopMovies, topMovies, topMoviesError } = useMoviesState();

  useEffect(() => {
    if (topMovies.length === 0) fetchTopMovies();
  }, []);

  const movieId = useParams().id;

  const [movieData, setMovieData] = useState(null);
  const [fetchMovieData, isMovieDataLoading, movieError] = useFetching(
    async () => {
      const data = await MoviesService.getMovieById(movieId);
      setMovieData(data);
    }
  );

  useEffect(() => {
    fetchMovieData();
  }, [movieId]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadingError = movieError.errorState || topMoviesError.errorState;

    if (loadingError) {
      const appError = [
        { ...topMoviesError, from: "MoviePage - topMovies" },
        { ...movieError, from: "MoviePage - movieData" },
      ];

      setAppError(appError);
      navigate("/error");
    }
  }, [movieError, navigate, setAppError, topMoviesError]);

  useLayoutEffect(() => scroll("top", 0, "auto"), [movieData]);

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
