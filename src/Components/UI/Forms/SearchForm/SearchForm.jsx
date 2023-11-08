import React, { useCallback, useState, useRef } from "react";
import "./SearchForm.css";
import PrimaryInput from "../../Inputs/PrimaryInput/PrimaryInput";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import { useAppState } from "../../../../Context/AppStateProvider/AppStateProvider";
import { useNavigate } from "react-router-dom";
import { searchInputValidation } from "../../../../Utils/Validation";

function SearchForm(props) {
  const [value, setValue] = useState("Введіть назву фільму...");
  const {
    dispatchSearchParams,
    dispatchOffsetPages,
    setSearchQueryValue,
    setSearchInfo,
  } = useAppState();
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
      const validValue = searchInputValidation(value);

      dispatchSearchParams({
        type: "change_search_params",
        params: {
          pageSize: 12,
          fields: ["title", "year", "coverImage", "id", "rating"],
          sort: [{ field: "year", direction: "desc" }],
          offset: null,
          filterByFormula: `SEARCH("${validValue}", REGEX_REPLACE(LOWER({title}), '["\\s]', ''))`,
        },
      });
      dispatchOffsetPages({ type: "reset" });

      if (value !== "Введіть назву фільму...") {
        setSearchInfo({
          sortByRating: false,
          info: `результати пошуку - "${value}"`,
        });
        setSearchQueryValue(value);
      } else {
        setSearchInfo({
          sortByRating: false,
          info: `результати пошуку - ""`,
        });
        setSearchQueryValue("");
      }
      setValue("Введіть назву фільму...");
      inputRef.current.blur();
      navigate("/homepage");
    },
    [
      dispatchSearchParams,
      dispatchOffsetPages,
      value,
      setSearchQueryValue,
      navigate,
      setSearchInfo,
    ]
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
