import React from "react";
import "./Footer.css";
import { ReactComponent as UkrainianEmblem } from "../../../Images/ukrainian_emblem.svg";
import { Link } from "react-router-dom";

function Footer(props) {
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
        <Link className="link-to-homepage" to="/homepage">
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
