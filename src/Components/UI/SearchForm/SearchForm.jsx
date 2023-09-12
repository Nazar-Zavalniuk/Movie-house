import React, { useCallback, useState, useRef } from "react";
import "./SearchForm.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { useNavigate } from "react-router-dom";
import { sanitize, validate } from "../../../Utils/Cleaning";

function SearchForm(props) {
  const [value, setValue] = useState("Введіть назву фільму...");
  const { setSearchParams, setSearchQueryValue, setSearchInfo } = useAppState();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleInput = useCallback((e) => setValue(e.target.value), []);

  const clearInputField = useCallback(() => setValue(""), []);

  const setDefaultState = useCallback((e) => {
    if (e.target.value === "") setValue("Введіть назву фільму...");
  }, []);

  const searchMovie = useCallback(
    (e) => {
      e.preventDefault();
      const sanitizedValue = sanitize(value);
      const validValue = validate(sanitizedValue);

      setSearchParams({
        title_like: `${validValue}`,
        _sort: "year",
        _order: "desc",
        _limit: 12,
        _page: 1,
      });
      setSearchInfo({
        sortByRating: false,
        info: `результати пошуку - "${sanitizedValue}"`,
      });
      setSearchQueryValue(sanitizedValue);
      setValue("Введіть назву фільму...");
      inputRef.current.blur();
      navigate("/homepage");
    },
    [setSearchParams, value, setSearchQueryValue, navigate, setSearchInfo]
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
