import React, { useCallback } from "react";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import BlockRecommendations from "../BlockRecommendations/BlockRecommendations";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../../../Utils/Sorting";
import { scroll } from "../../../API/Scroll";
import { useNavigate } from "react-router-dom";
import { useMoviesState } from "../../../Context/MoviesStateProvider/MoviesStateProvider";

function SidebarWithRecommendation({ ...props }) {
  const { setSearchParams, setSearchInfo } = useAppState();
  const { recommendedMovies, recommendedSeries } = useMoviesState();
  const navigate = useNavigate();

  const sortByMovies = useCallback(() => {
    setSearchParams(getSearchParams("views", "desc", 12, 1, ["type", "movie"]));
    setSearchInfo({ sortByRating: false, info: "рекомендовані фільми" });
    navigate("/homepage");
  }, [setSearchParams, setSearchInfo, navigate]);

  const sortBySeries = useCallback(() => {
    setSearchParams(
      getSearchParams("views", "desc", 12, 1, ["type", "tv-series"])
    );
    setSearchInfo({ sortByRating: false, info: "рекомендовані серіали" });
    navigate("/homepage");
    scroll("top", 425, "smooth");
  }, [setSearchParams, setSearchInfo, navigate]);

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
