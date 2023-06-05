import React, { useState } from "react";
import "./PrimarySideBar.css";
import SidBarGuestLinks from "../SidBarGuestLinks/SidBarGuestLinks";
import SideBarUserLinks from "../SideBarUserLinks/SideBarUserLinks";

function PrimarySideBar({ children, isAuth = false, ...props }) {
  return (
    <div className="side-bar">
      <div className="side-bar-links">
        {isAuth ? <SideBarUserLinks /> : <SidBarGuestLinks />}
      </div>
      {children}
    </div>
  );
}

export default PrimarySideBar;
