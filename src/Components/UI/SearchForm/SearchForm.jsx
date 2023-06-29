import React, { useCallback, useState, useRef } from "react";
import "./SearchForm.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useAppState from "../../../Context/Hook/useAppState";
import { sortByTitle } from "../../../Utils/Sorting";

function SearchForm(props) {
  const [value, setValue] = useState("Введіть назву фільму...");
  const { setSortingParams, setSearchQueryValue } = useAppState();
  const inputRef = useRef(null);

  const handleInput = useCallback((e) => setValue(e.target.value), []);

  const clearInputField = useCallback(() => setValue(""), []);

  const setDefaultState = useCallback((e) => {
    if (e.target.value === "") setValue("Введіть назву фільму...");
  }, []);

  const searchMovie = useCallback(
    (e) => {
      e.preventDefault();
      sortByTitle(setSortingParams, value);
      setSearchQueryValue(value);
      setValue("Введіть назву фільму...");
      inputRef.current.blur();
    },
    [setSortingParams, value, setSearchQueryValue]
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
