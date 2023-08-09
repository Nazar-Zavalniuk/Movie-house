import React from "react";
import "./RestorePassword.css";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import RestorePasswordBody from "../../Components/UI/RestorePasswordBody/RestorePasswordBody";

function RestorePassword(props) {
  return (
    <div className="restore-password-page page">
      <Header includesSearchBar={false} />
      <RestorePasswordBody />
      <Footer />
    </div>
  );
}

export default RestorePassword;
