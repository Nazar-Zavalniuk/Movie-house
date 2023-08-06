import React, { useState, useEffect } from "react";
import "./ErrorInfo.css";
import useAppState from "../../../Context/Hook/useAppState";
import { v4 as uuidv4 } from "uuid";

function ErrorInfo(props) {
  const {
    actorsError,
    topMoviesError,
    mainMoviesError,
    recommendedMoviesError,
    recommendedSeriesError,
    currentMovieError,
  } = useAppState();

  const errorAddresses = [
    "actorsError",
    "topMoviesError",
    "mainMoviesError",
    "recommendedMoviesError",
    "recommendedSeriesError",
    "currentMovieError",
  ];

  const [errors, setErrors] = useState([]);
  const messages = [];

  useEffect(() => {
    setErrors([
      actorsError,
      topMoviesError,
      mainMoviesError,
      recommendedMoviesError,
      recommendedSeriesError,
      currentMovieError,
    ]);
  }, [
    actorsError,
    topMoviesError,
    mainMoviesError,
    recommendedMoviesError,
    recommendedSeriesError,
    currentMovieError,
  ]);

  errors.forEach((error, index) => {
    const address = errorAddresses[index];

    if (error !== null && error.errorMessage !== "")
      messages.push(`${error.errorMessage} (${address})`);
  });

  return (
    <div className="error-info">
      <div className="error-title">Помилка!</div>
      <div className="error-message">
        При завантаженні сторінки виникла(и) наступна(і) помилка(и):
      </div>
      <ul className="list-errors">
        {messages.map((message) => {
          return <li key={uuidv4()}>{message}</li>;
        })}
      </ul>
    </div>
  );
}

export default ErrorInfo;
