import React from "react";
import "./SidBarGuestLinks.css";
import PrimaryLinkAsButton from "../PrimaryLinkAsButton/PrimaryLinkAsButton";

function SidBarGuestLinks(props) {
  return (
    <div className="guest-links">
      <PrimaryLinkAsButton className="registration" link="/registration">
        Реєстрація
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="login" link="/login">
        Вхід
      </PrimaryLinkAsButton>
      <PrimaryLinkAsButton className="faq-guest" link="/temporary-page">
        ?
      </PrimaryLinkAsButton>
    </div>
  );
}

export default SidBarGuestLinks;
