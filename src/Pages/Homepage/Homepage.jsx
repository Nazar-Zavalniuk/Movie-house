import React from "react";
import "./Homepage.css";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import TopMovies from "../../Components/UI/TopMovies/TopMovies";
import NavBar from "../../Components/UI/NavBar/NavBar";
import SortingPanel from "../../Components/UI/SortingPanel/SortingPanel";
import MainMoviesBlock from "../../Components/UI/MainMoviesBlock/MainMoviesBlock";
import SidebarWithRecommendation from "../../Components/UI/SidebarWithRecommendation/SidebarWithRecommendation";
import PrimarySideBar from "../../Components/UI/PrimarySideBar/PrimarySideBar";
import NoResultsFound from "../../Components/UI/NoResultsFound/NoResultsFound";
import useHomepage from "../../Hooks/useHomepage";

function Homepage(props) {
  const [
    mainMovies,
    isMainMoviesLoading,
    isSortByRecommended,
    isMainMoviesEmpty,
  ] = useHomepage();

  return (
    <div className="page homepage">
      <Header />
      <TopMovies />
      <NavBar />
      <SortingPanel />
      {isMainMoviesEmpty && !isMainMoviesLoading ? (
        <NoResultsFound />
      ) : (
        <MainMoviesBlock
          movies={mainMovies}
          isMoviesLoading={isMainMoviesLoading}
        />
      )}
      {isSortByRecommended ? <PrimarySideBar /> : <SidebarWithRecommendation />}
      <Footer />
    </div>
  );
}

export default Homepage;
