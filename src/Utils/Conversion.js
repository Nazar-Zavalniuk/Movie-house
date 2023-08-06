import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function convertStringToLinksAndSetSearchFunction(
  string,
  searchFunction,
  ...searchFunctionParams
) {
  const stringsArr = string.split(", ");
  const indexLastString = stringsArr.length - 1;

  function onHandleClick(e) {
    const searchValue = e.target.textContent;
    searchFunction(...searchFunctionParams, searchValue);
  }

  const links = stringsArr.map((string, index) => {
    if (index === indexLastString) {
      return (
        <Link to="/homepage" onClick={onHandleClick} key={uuidv4()}>
          {string}
        </Link>
      );
    } else {
      return (
        <Fragment key={uuidv4()}>
          <Link to="/homepage" onClick={onHandleClick}>
            {string}
          </Link>
          ,{" "}
        </Fragment>
      );
    }
  });

  return links;
}
