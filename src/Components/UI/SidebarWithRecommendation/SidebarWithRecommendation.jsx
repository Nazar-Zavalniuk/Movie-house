import React from "react";
import "./SidebarWithRecommendation.css";
import PrimarySideBar from "../PrimarySideBar/PrimarySideBar";
import BlockRecommendations from "../BlockRecommendations/BlockRecommendations";

function SidebarWithRecommendation({ isAuth, movies = [], ...porps }) {
  return (
    <PrimarySideBar isAuth={isAuth}>
      <BlockRecommendations
        className="movies"
        movies={movies}
        link="/recommended/movies"
      >
        Рекомендовані фільми
      </BlockRecommendations>
      <BlockRecommendations
        className="series"
        movies={movies}
        link="recommended/series"
      >
        Рекомендовані серіали
      </BlockRecommendations>
    </PrimarySideBar>
  );
}

export default SidebarWithRecommendation;
