import React, { useCallback, useState, useRef } from "react";
import "./SearchForm.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByTitle } from "../../../Utils/Sorting";
import { useNavigate } from "react-router-dom";

function SearchForm(props) {
  const [value, setValue] = useState("Введіть назву фільму...");
  const { setSortingParams, setSearchQueryValue } = useAppState();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleInput = useCallback((e) => setValue(e.target.value), []);

  const clearInputField = useCallback(() => setValue(""), []);

  const setDefaultState = useCallback((e) => {
    if (e.target.value === "") setValue("Введіть назву фільму...");
  }, []);

  // This function clears a string of invalid characters and a default value
  // that acts as a hint for the user. The string thus cleared can contain only
  // letters of the Latin, Russian and Ukrainian alphabets including spaces,
  // numbers and the following symbols:
  // (,), (.), ('), ("), (:), (;), (№), (&), (/), (%), (-), (+), (#), (?), (!).
  const sanitize = useCallback((str) => {
    if (str === "Введіть назву фільму...") {
      return "";
    } else {
      return str.replace(/[^a-zA-Zа-яА-ЯіІїЇєЄґҐё0-9 ,.'":;№&/%\-+#?!]/gu, "");
    }
  }, []);

  // This function modifies the string by adding a backslash character
  // before each character so that the modified string can be sent to the
  // http request, avoiding errors that are associated with the presence of
  // special characters in the string.
  const validate = useCallback((str) => {
    return str.replace(/[,.'":;№&/%+#?!]/g, "\\$&");
  }, []);

  const searchMovie = useCallback(
    (e) => {
      e.preventDefault();
      const sanitizedValue = sanitize(value);
      const validValue = validate(sanitizedValue);

      sortByTitle(setSortingParams, validValue, sanitizedValue);
      setSearchQueryValue(sanitizedValue);
      setValue("Введіть назву фільму...");
      inputRef.current.blur();
      navigate("/homepage");
    },
    [setSortingParams, value, setSearchQueryValue, validate, sanitize, navigate]
  );

  return (
    <form className="search-form" onSubmit={searchMovie}>
      <PrimaryInput
        onFocus={clearInputField}
        onChange={handleInput}
        onBlur={setDefaultState}
        className="search-input"
        value={value}
        ref={inputRef}
      />
      <PrimaryButton className="search-btn">Пошук</PrimaryButton>
    </form>
  );
}

export default SearchForm;
