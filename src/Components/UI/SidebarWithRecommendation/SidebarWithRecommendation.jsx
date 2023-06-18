import React, { useCallback } from "react";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import BlockRecommendations from "../BlockRecommendations/BlockRecommendations";
import useAppState from "../../../Context/Hook/useAppState";
import {
  sortByRecommendedMovies,
  sortByRecommendedSeries,
} from "../../../Utils/Sorting";

function SidebarWithRecommendation({ isAuth, ...props }) {
  const { setSortingParams, recommendedMovies, recommendedSeries } =
    useAppState();

  const sortByMovies = useCallback(() => {
    sortByRecommendedMovies(setSortingParams);
  }, [setSortingParams]);

  const sortBySeries = useCallback(() => {
    sortByRecommendedSeries(setSortingParams);
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
