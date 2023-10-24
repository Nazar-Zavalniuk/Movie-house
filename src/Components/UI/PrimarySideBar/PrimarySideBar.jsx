import React from "react";
import "./PrimarySideBar.css";
import SidBarGuestLinks from "../SidBarGuestLinks/SidBarGuestLinks";
import SideBarUserLinks from "../SideBarUserLinks/SideBarUserLinks";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function PrimarySideBar({ children, ...props }) {
  const { username } = useAppState();

  return (
    <div className="side-bar">
      <div className="side-bar-links">
        {username !== null ? <SideBarUserLinks /> : <SidBarGuestLinks />}
      </div>
      {children}
    </div>
  );
}

export default PrimarySideBar;
