import React from "react";
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

function Homepage(props) {
  const { sortingParams } = useAppState();
  const { sortInfo } = sortingParams;
  const isSortByRecommended = sortInfo.info.includes("рекомендовані");

  return (
    <div className="page homepage">
      <Header />
      <TopMovies />
      <NavBar />
      <SortingPanel />
      <MainMoviesBlock />
      <PageNavigationButtons />
      {isSortByRecommended ? <PrimarySideBar /> : <SidebarWithRecommendation />}
      <Footer />
    </div>
  );
}

export default Homepage;
