import React, { useCallback } from "react";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import BlockRecommendations from "../BlockRecommendations/BlockRecommendations";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByRecommended } from "../../../Utils/Sorting";
import { scroll } from "../../../API/Scroll";

function SidebarWithRecommendation({ isAuth, ...props }) {
  const { setSortingParams, recommendedMovies, recommendedSeries } =
    useAppState();

  const sortByMovies = useCallback(() => {
    sortByRecommended(setSortingParams, "movie");
  }, [setSortingParams]);

  const sortBySeries = useCallback(() => {
    sortByRecommended(setSortingParams, "tv-series");
    scroll("top", 425, "smooth");
  }, [setSortingParams]);

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
