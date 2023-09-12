import React, { useCallback } from "react";
import "./Footer.css";
import { ReactComponent as UkrainianEmblem } from "../../../Images/ukrainian_emblem.svg";
import { Link } from "react-router-dom";
import { scroll } from "../../../API/Scroll";
import useRebootHomepage from "../../../Hooks/useRebootHomepage";

function Footer(props) {
  const rebootHomepage = useRebootHomepage();

  const rebootHomepageAndScrollToStartPage = useCallback(() => {
    rebootHomepage();
    scroll("top", 0, "auto");
  }, [rebootHomepage]);

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
          onClick={rebootHomepageAndScrollToStartPage}
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
