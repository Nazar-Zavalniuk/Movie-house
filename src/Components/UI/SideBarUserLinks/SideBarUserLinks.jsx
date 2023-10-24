import React from "react";
import "./SideBarUserLinks.css";
import PrimaryLinkAsButton from "../PrimaryLinkAsButton/PrimaryLinkAsButton";
import { FaUser } from "react-icons/fa";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";

function SideBarUserLinks(props) {
  const { username } = useAppState();

  return (
    <div className="user-links">
      <PrimaryLinkAsButton className="user-info" link="/user-settings">
        <FaUser className="user-icon" size={30} />
        <div className="user-name" title={username}>
          {username}
        </div>
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="faq-user" link="/temporary-page">
        ?
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="watch-later" link="/temporary-page">
        На потім
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="favorite" link="/temporary-page">
        Обране
      </PrimaryLinkAsButton>
    </div>
  );
}

export default SideBarUserLinks;
