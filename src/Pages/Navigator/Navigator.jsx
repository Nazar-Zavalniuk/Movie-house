import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Navigator.css";
import MultiSortPanel from "../../Components/UI/MultiSortPanel/MultiSortPanel";
import Header from "../../Components/UI/Header/Header";
import TopMovies from "../../Components/UI/TopMovies/TopMovies";
import MainMoviesBlock from "../../Components/UI/MainMoviesBlock/MainMoviesBlock";
import SidebarWithRecommendation from "../../Components/UI/SidebarWithRecommendation/SidebarWithRecommendation";
import Footer from "../../Components/UI/Footer/Footer";
import useAppState from "../../Context/Hook/useAppState";
import { Navigate } from "react-router-dom";
import NoResultsFound from "../../Components/UI/NoResultsFound/NoResultsFound";
import MultiSortPanelClue from "../../Components/UI/MultiSortPanelClue/MultiSortPanelClue";

function Navigator(props) {
  const {
    sortingParams,
    setSortingParams,
    actorsError,
    topMoviesError,
    mainMoviesError,
    isActorsLoading,
    isTopMoviesLoading,
    isMainMoviesLoading,
    mainMovies,
    setSearchQueryValue,
  } = useAppState();

  const [mostImportantErrors, setMostImportantErrors] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState([]);

  const [isFirstPageLoad, setIsFirstPageLoad] = useState(true);
  const { info } = sortingParams.sortInfo;
  const [isFilterOptionsSet, setIsFilterOptionsSet] = useState(false);
  const isMainMoviesEmpty = mainMovies.length === 0;

  useEffect(() => {
    setIsPageLoading([
      isActorsLoading,
      isTopMoviesLoading,
      isMainMoviesLoading,
    ]);

    setMostImportantErrors([
      actorsError.errorState,
      topMoviesError.errorState,
      mainMoviesError.errorState,
    ]);
  }, [
    actorsError,
    topMoviesError,
    mainMoviesError,
    isActorsLoading,
    isTopMoviesLoading,
    isMainMoviesLoading,
  ]);

  useLayoutEffect(() => {
    setSortingParams({
      ...sortingParams,
      prevSortInfo: { sortByRating: false, info: "навігатор" },
      sortInfo: { sortByRating: false, info: "навігатор" },
    });

    // Clear the value of the search query that could have been previously
    // entered in the search field in order to prevent incorrect display of
    // information about the search result on the current page.
    setSearchQueryValue("");
  }, []);

  useEffect(() => {
    if (info === "навігатор") setIsFirstPageLoad(true);
    if (info.includes("навігатор результати пошуку")) setIsFirstPageLoad(false);
  }, [info]);

  if (mostImportantErrors.includes(true) && !isPageLoading.includes(true))
    return <Navigate to="/error" replace />;

  return (
    <div className="page navigator">
      <Header />
      <TopMovies />
      <MultiSortPanel setIsFilterOptionsSet={setIsFilterOptionsSet} />
      {isFirstPageLoad || !isFilterOptionsSet ? (
        <MultiSortPanelClue isFirstPageLoad={isFirstPageLoad} />
      ) : isMainMoviesEmpty && !isMainMoviesLoading ? (
        <NoResultsFound />
      ) : (
        <MainMoviesBlock scrollParams={["top", 330, "smooth"]} />
      )}
      <SidebarWithRecommendation />
      <Footer />
    </div>
  );
}

export default Navigator;
