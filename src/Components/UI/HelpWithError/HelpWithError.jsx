import React, { useCallback } from "react";
import "./HelpWithError.css";
import { Link } from "react-router-dom";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByDefault } from "../../../Utils/Sorting";

function HelpWithError(props) {
  const { numReboots, setNumReboots, setSortingParams } = useAppState();

  const reloadHomepage = useCallback(() => {
    setNumReboots(numReboots + 1);
    sortByDefault(setSortingParams);
  }, [numReboots, setNumReboots, setSortingParams]);

  return (
    <div className="help-with-error">
      Спробуйте повернутись{" "}
      <Link
        onClick={reloadHomepage}
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
