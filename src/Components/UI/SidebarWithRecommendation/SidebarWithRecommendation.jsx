import React, { useCallback } from "react";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import BlockRecommendations from "../BlockRecommendations/BlockRecommendations";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { scroll } from "../../../Utils/Scroll";
import { useNavigate } from "react-router-dom";
import { useMoviesState } from "../../../Context/MoviesStateProvider/MoviesStateProvider";

function SidebarWithRecommendation({ ...props }) {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();
  const { recommendedMovies, recommendedSeries } = useMoviesState();
  const navigate = useNavigate();

  const sortByMovies = useCallback(() => {
    dispatchSearchParams({
      type: "change_search_params",
      params: {
        pageSize: 12,
        fields: ["title", "year", "coverImage", "id", "rating"],
        sort: [{ field: "views", direction: "desc" }],
        offset: null,
        filterByFormula: `SEARCH('movie', {type})`,
      },
    });
    dispatchOffsetPages({ type: "reset" });
    setSearchInfo({ sortByRating: false, info: "рекомендовані фільми" });
    navigate("/homepage");
  }, [dispatchSearchParams, dispatchOffsetPages, setSearchInfo, navigate]);

  const sortBySeries = useCallback(() => {
    dispatchSearchParams({
      type: "change_search_params",
      params: {
        pageSize: 12,
        fields: ["title", "year", "coverImage", "id", "rating"],
        sort: [{ field: "views", direction: "desc" }],
        offset: null,
        filterByFormula: `SEARCH('tv-series', {type})`,
      },
    });
    dispatchOffsetPages({ type: "reset" });
    setSearchInfo({ sortByRating: false, info: "рекомендовані серіали" });
    navigate("/homepage");
    scroll("top", 425, "smooth");
  }, [dispatchSearchParams, dispatchOffsetPages, setSearchInfo, navigate]);

  return (
    <PrimarySideBar>
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
