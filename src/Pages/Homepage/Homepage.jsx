import React, { useEffect } from "react";
import "./Homepage.css";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import TopMovies from "../../Components/UI/TopMovies/TopMovies";
import NavBar from "../../Components/UI/NavBar/NavBar";
import SortingPanel from "../../Components/UI/SortingPanel/SortingPanel";
import MainMoviesBlock from "../../Components/UI/MainMoviesBlock/MainMoviesBlock";
import SidebarWithRecommendation from "../../Components/UI/SidebarWithRecommendation/SidebarWithRecommendation";
import PageNavigationButtons from "../../Components/UI/PageNavigationButtons/PageNavigationButtons";
import PrimarySideBar from "../../Components/UI/PrimarySideBar/PrimarySideBar";
import useAppState from "../../Context/Hook/useAppState";
import NoResultsFound from "../../Components/UI/NoResultsFound/NoResultsFound";

function Homepage(props) {
  const {
    sortingParams,
    mainMovies,
    isMainMoviesLoading,
    setSearchQueryValue,
    totalPages,
  } = useAppState();
  const isMainMoviesEmpty = mainMovies.length === 0;
  const isMainMoviesLoaded = isMainMoviesLoading === false;
  const { info } = sortingParams.sortInfo;
  const isSortByRecommended = info.includes("рекомендовані");

  // 'searchQueryValue' - a state that stores information about user input in
  // the search field and is used to display the corresponding page
  // elements containing this information in the absence of matches in the
  // database for the query. The code below clears this state if the user is
  // searching using the navigation elements on the page.
  useEffect(() => {
    if (!info.includes("результати пошуку")) setSearchQueryValue("");
  }, [setSearchQueryValue, info]);

  return (
    <div className="page homepage">
      <Header />
      <TopMovies />
      <NavBar />
      <SortingPanel />
      {isMainMoviesEmpty && isMainMoviesLoaded ? (
        <NoResultsFound />
      ) : (
        <MainMoviesBlock />
      )}
      {totalPages !== 1 && <PageNavigationButtons />}
      {isSortByRecommended ? <PrimarySideBar /> : <SidebarWithRecommendation />}
      <Footer />
    </div>
  );
}

export default Homepage;
