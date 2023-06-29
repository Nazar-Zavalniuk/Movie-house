import "./ListHotLinks.css";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useAppState from "../../../Context/Hook/useAppState";
import { useCallback } from "react";
import { sortByYear, sortByYearAndId } from "../../../Utils/Sorting";

function ListHotLinks(props) {
  const { setSortingParams } = useAppState();

  const sortByNovelties = useCallback(
    () => sortByYear(setSortingParams),
    [setSortingParams]
  );

  const sortByPremiers = useCallback(
    () => sortByYearAndId(setSortingParams),
    [setSortingParams]
  );

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
        <Link to="/homepage" className="hot-link navigator">
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
