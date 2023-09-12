import React from "react";
import "./HelpWithError.css";
import { Link } from "react-router-dom";
import useRebootHomepage from "../../../Hooks/useRebootHomepage";

function HelpWithError(props) {
  const rebootHomepage = useRebootHomepage();

  return (
    <div className="help-with-error">
      Спробуйте повернутись{" "}
      <Link
        onClick={rebootHomepage}
        className="back-to-homepage"
        to="/homepage"
      >
        на головну сторінку
      </Link>{" "}
      та повторно виконати попередні дії. Якщо це не допомоло ви можете написати
      електронного листа за адресою
      <address className="support-email">"nazarzaval99@gmail.com"</address>. У
      полі тема зазначте "Будинок кіно", а в описі вкажіть які саме помилки
      виникли пид час завантаження сторінки.
    </div>
  );
}

export default HelpWithError;
