import "./ListHotLinks.css";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import React, { useCallback } from "react";
import { movieIds } from "../../../Data/DataToSort";

function ListHotLinks(props) {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();
  const navigate = useNavigate();

  const sortByNovelties = useCallback(() => {
    dispatchSearchParams({
      type: "change_search_params",
      params: {
        pageSize: 12,
        fields: ["title", "year", "coverImage", "id", "rating"],
        sort: [{ field: "year", direction: "desc" }],
        offset: null,
        filterByFormula: null,
      },
    });
    dispatchOffsetPages({ type: "reset" });
    setSearchInfo({ sortByRating: false, info: "новинки" });
    navigate("/homepage");
  }, [dispatchSearchParams, dispatchOffsetPages, setSearchInfo, navigate]);

  const sortByPremiers = useCallback(() => {
    dispatchSearchParams({
      type: "change_search_params",
      params: {
        pageSize: 12,
        fields: ["title", "year", "coverImage", "id", "rating"],
        sort: [
          { field: "year", direction: "desc" },
          { field: "serialNumber", direction: "desc" },
        ],
        offset: null,
        filterByFormula: null,
      },
    });
    dispatchOffsetPages({ type: "reset" });
    setSearchInfo({ sortByRating: false, info: "прем'єри" });
    navigate("/homepage");
  }, [dispatchSearchParams, dispatchOffsetPages, setSearchInfo, navigate]);

  const getRandomMovieId = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * 148) + 1;
    return movieIds[randomIndex];
  }, []);

  const goToRandomMovie = useCallback(() => {
    const randomMovieId = getRandomMovieId();
    navigate(`/movie/${randomMovieId}`);
  }, [getRandomMovieId, navigate]);

  return (
    <ul className="hot-links">
      <li>
        <PrimaryButton className="novelties" onClick={sortByNovelties}>
          Новинки
        </PrimaryButton>
      </li>
      <li>
        <PrimaryButton className="movie-premiers" onClick={sortByPremiers}>
          Прем'єри
        </PrimaryButton>
      </li>
      <li>
        <Link className="hot-link navigator" to="/navigator">
          <span className="text-link">Навігатор</span>
        </Link>
      </li>
      <li>
        <PrimaryButton className="hot-link random" onClick={goToRandomMovie}>
          Випадковий
        </PrimaryButton>
      </li>
    </ul>
  );
}

export default ListHotLinks;
