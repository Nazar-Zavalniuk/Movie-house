import React, { useEffect, useState } from "react";
import "./Navigator.css";
import MultiSortPanel from "../../Components/UI/MultiSortPanel/MultiSortPanel";
import Header from "../../Components/UI/Header/Header";
import TopMovies from "../../Components/UI/TopMovies/TopMovies";
import MainMoviesBlock from "../../Components/UI/MainMoviesBlock/MainMoviesBlock";
import SidebarWithRecommendation from "../../Components/UI/SidebarWithRecommendation/SidebarWithRecommendation";
import Footer from "../../Components/UI/Footer/Footer";
import { useAppState } from "../../Context/AppStateProvider/AppStateProvider";
import NoResultsFound from "../../Components/UI/NoResultsFound/NoResultsFound";
import MultiSortPanelClue from "../../Components/UI/MultiSortPanelClue/MultiSortPanelClue";
import RatingSortWarningModal from "../../Components/UI/ModalWindows/RatingSortWarningModal/RatingSortWarningModal";
import useNavigator from "../../Hooks/useNavigator";

function Navigator(props) {
  const [isFirstPageLoad, setIsFirstPageLoad] = useState(true);
  const [isFilterOptionsSet, setIsFilterOptionsSet] = useState(false);

  const { setIsRatingSortUnavailable } = useAppState();

  useEffect(() => {
    setIsRatingSortUnavailable(!isFilterOptionsSet);
    return () => {
      setIsRatingSortUnavailable(false);
    };
  }, [setIsRatingSortUnavailable, isFilterOptionsSet]);

  const [mainMovies, isMainMoviesLoading, isMainMoviesEmpty] =
    useNavigator(isFilterOptionsSet);

  return (
    <div className="page navigator">
      <Header />
      <TopMovies />
      <MultiSortPanel
        setIsFilterOptionsSet={setIsFilterOptionsSet}
        setIsFirstPageLoad={setIsFirstPageLoad}
      />
      {isFirstPageLoad || !isFilterOptionsSet ? (
        <MultiSortPanelClue isFirstPageLoad={isFirstPageLoad} />
      ) : isMainMoviesEmpty && !isMainMoviesLoading ? (
        <NoResultsFound />
      ) : (
        <MainMoviesBlock
          movies={mainMovies}
          isMoviesLoading={isMainMoviesLoading}
          scrollParams={["top", 330, "smooth"]}
        />
      )}
      <SidebarWithRecommendation />
      <Footer />
      <RatingSortWarningModal>
        Спочатку вкажіть параметри та виконайте пошук.
      </RatingSortWarningModal>
    </div>
  );
}

export default Navigator;
