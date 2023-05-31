import React from "react";
import "./SearchBar.css";
import SearchForm from "../SearchForm/SearchForm";
import ListHotLinks from "../ListHotLinks/ListHotLinks";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <SearchForm />
      <ListHotLinks />
    </div>
  );
}

export default SearchBar;
