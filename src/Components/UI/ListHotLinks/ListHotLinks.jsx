import "./ListHotLinks.css";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { useCallback } from "react";

function ListHotLinks(props) {
  const { setSearchParams, setSearchInfo } = useAppState();
  const navigate = useNavigate();

  const sortByNovelties = useCallback(() => {
    setSearchParams({
      _sort: "year",
      _order: "desc",
      _limit: 12,
      _page: 1,
    });
    setSearchInfo({
      sortByRating: false,
      info: "новинки",
    });
    navigate("/homepage");
  }, [setSearchParams, setSearchInfo, navigate]);

  const sortByPremiers = useCallback(() => {
    setSearchParams({
      _sort: "year,id",
      _order: "desc,desc",
      _limit: 12,
      _page: 1,
    });
    setSearchInfo({
      sortByRating: false,
      info: "прем'єри",
    });
    navigate("/homepage");
  }, [setSearchParams, setSearchInfo, navigate]);

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
