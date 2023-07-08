import React, { useCallback, useEffect, useState } from "react";
import "./Error.css";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import useAppState from "../../Context/Hook/useAppState";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { sortByDefault } from "../../Utils/Sorting";

function Error(props) {
  const {
    actorsError,
    topMoviesError,
    mainMoviesError,
    recommendedMoviesError,
    recommendedSeriesError,
    numReboots,
    setNumReboots,
    setSortingParams,
  } = useAppState();
  const errorAddresses = [
    "actorsError",
    "topMoviesError",
    "mainMoviesError",
    "recommendedMoviesError",
    "recommendedSeriesError",
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
    ]);
  }, [
    actorsError,
    topMoviesError,
    mainMoviesError,
    recommendedMoviesError,
    recommendedSeriesError,
  ]);

  errors.forEach((error, index) => {
    const address = errorAddresses[index];
    if (error.errorMessage !== "")
      messages.push(`${error.errorMessage} (${address})`);
  });

  const reloadHomepage = useCallback(() => {
    setNumReboots(numReboots + 1);
    sortByDefault(setSortingParams);
  }, [numReboots, setNumReboots, setSortingParams]);

  return (
    <div className="page error">
      <div className="body-error">
        <Header includesSearchBar={false} />
        <div className="error-info-body">
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
          <div className="help-with-error">
            Спробуйте повернутись{" "}
            <Link
              onClick={reloadHomepage}
              className="back-to-homepage"
              to="/homepage"
            >
              на головну сторінку
            </Link>{" "}
            та повторно виконати попередні дії. Якщо це не допомоло ви можете
            написати електронного листа за адресою
            <address className="support-email">
              "nazarzaval99@gmail.com"
            </address>
            . У полі тема зазначте "Будинок кіно", а в описі вкажіть які саме
            помилки виникли пид час завантаження сторінки.
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Error;
