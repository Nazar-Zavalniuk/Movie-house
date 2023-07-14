import React, { useCallback } from "react";
import "./Footer.css";
import { ReactComponent as UkrainianEmblem } from "../../../Images/ukrainian_emblem.svg";
import { Link } from "react-router-dom";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByDefault } from "../../../Utils/Sorting";
import { scroll } from "../../../API/Scroll";

function Footer(props) {
  const { numReboots, setNumReboots, setSortingParams } = useAppState();

  const reloadHomepageAndScrollToStartPage = useCallback(() => {
    setNumReboots(numReboots + 1);
    sortByDefault(setSortingParams);
    scroll("top", 0, "auto");
  }, [numReboots, setNumReboots, setSortingParams]);

  return (
    <div className="footer">
      <div className="about-site">
        <Link
          className="support-ukraine"
          to="https://u24.gov.ua/uk"
          target="_blank"
          title="Підтримати Україну"
        >
          <UkrainianEmblem className="ukrainian-emblem" />
        </Link>
        <Link
          className="link-to-homepage"
          to="/homepage"
          onClick={reloadHomepageAndScrollToStartPage}
        >
          Будинок кіно
        </Link>
        <div className="about-site-description">
          - це виключно учбовий проєкт для демонстрації навичок здобутих за час
          навчання.
        </div>
      </div>
    </div>
  );
}

export default Footer;
