import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

function Header({ includesSearchBar = true, ...props }) {
  return (
    <div className="header">
      <Logo />
      {includesSearchBar && <SearchBar />}
    </div>
  );
}

export default Header;
