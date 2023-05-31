import React, { useCallback, useState } from "react";
import "./SearchForm.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function SearchForm(props) {
  const [value, setValue] = useState("Введіть назву фільму...");

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const focus = useCallback(
    (e) => {
      setValue("");
    },
    [setValue]
  );

  return (
    <form className="search-form">
      <PrimaryInput
        onFocus={focus}
        onChange={onChange}
        className="search-input"
        value={value}
      />
      <PrimaryButton className="search-btn">Пошук</PrimaryButton>
    </form>
  );
}

export default SearchForm;
