import React, { useCallback } from "react";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import BlockRecommendations from "../BlockRecommendations/BlockRecommendations";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByRecommended } from "../../../Utils/Sorting";
import { scroll } from "../../../API/Scroll";
import { useNavigate } from "react-router-dom";

function SidebarWithRecommendation({ isAuth, ...props }) {
  const { setSortingParams, recommendedMovies, recommendedSeries } =
    useAppState();
  const navigate = useNavigate();

  const sortByMovies = useCallback(() => {
    sortByRecommended(setSortingParams, "movie");
    navigate("/homepage");
  }, [setSortingParams, navigate]);

  const sortBySeries = useCallback(() => {
    sortByRecommended(setSortingParams, "tv-series");
    navigate("/homepage");
    scroll("top", 425, "smooth");
  }, [setSortingParams, navigate]);

  return (
    <PrimarySideBar isAuth={isAuth}>
      <BlockRecommendations
        onClick={sortByMovies}
        className="movies"
        movies={recommendedMovies}
      >
        Рекомендовані фільми
      </BlockRecommendations>
      <BlockRecommendations
        onClick={sortBySeries}
        className="series"
        movies={recommendedSeries}
      >
        Рекомендовані серіали
      </BlockRecommendations>
    </PrimarySideBar>
  );
}

export default SidebarWithRecommendation;
