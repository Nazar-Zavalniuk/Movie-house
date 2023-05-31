import "./ListHotLinks.css";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function ListHotLinks(props) {
  return (
    <ul className="hot-links">
      <li>
        <PrimaryButton className="novelties">Новинки</PrimaryButton>
      </li>
      <li>
        <PrimaryButton className="movie-premiers">Прем'єри</PrimaryButton>
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
