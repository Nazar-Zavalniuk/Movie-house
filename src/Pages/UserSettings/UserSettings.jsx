import React from "react";
import "./UserSettings.css";
import Header from "../../Components/UI/Header/Header";
import UserSettingsBody from "../../Components/UI/UserSettingsBody/UserSettingsBody";
import Footer from "../../Components/UI/Footer/Footer";

function UserSettings(props) {
  return (
    <div className="user-settings page">
      <Header />
      <UserSettingsBody />
      <Footer />
    </div>
  );
}

export default UserSettings;
