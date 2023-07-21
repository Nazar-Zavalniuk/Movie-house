import "./ListHotLinks.css";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useAppState from "../../../Context/Hook/useAppState";
import { useCallback } from "react";
import { sortByYear, sortByYearAndId } from "../../../Utils/Sorting";

function ListHotLinks(props) {
  const { setSortingParams } = useAppState();
  const navigate = useNavigate();

  const sortByNovelties = useCallback(() => {
    sortByYear(setSortingParams);
    navigate("/homepage");
  }, [setSortingParams, navigate]);

  const sortByPremiers = useCallback(() => {
    sortByYearAndId(setSortingParams);
    navigate("/homepage");
  }, [setSortingParams, navigate]);

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
        <Link to="/movie/:id" className="hot-link random">
          <span className="text-link">Випадковий</span>
        </Link>
      </li>
    </ul>
  );
}

export default ListHotLinks;
