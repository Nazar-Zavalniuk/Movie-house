import React from "react";
import "./SideBarUserLinks.css";
import PrimaryLinkAsButton from "../PrimaryLinkAsButton/PrimaryLinkAsButton";
import { FaUser } from "react-icons/fa";
import useAppState from "../../../Context/Hook/useAppState";

function SideBarUserLinks(props) {
  const { userName } = useAppState();

  return (
    <div className="user-links">
      <PrimaryLinkAsButton className="user-info" link="/user-settings">
        <FaUser className="user-icon" size={30} />
        <div className="user-name" title={userName}>
          {userName}
        </div>
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="faq-user" link="/faq">
        ?
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="watch-later" link="/watch-later">
        На потім
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="favorite" link="/favorite">
        Обране
      </PrimaryLinkAsButton>
    </div>
  );
}

export default SideBarUserLinks;
