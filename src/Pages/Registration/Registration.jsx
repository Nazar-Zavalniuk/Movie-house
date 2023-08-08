import React from "react";
import "./Registration.css";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import RegistrationBody from "../../Components/UI/RegistrationBody/RegistrationBody";

function Registration(props) {
  return (
    <div className="registration-page page">
      <Header includesSearchBar={false} />
      <RegistrationBody />
      <Footer />
    </div>
  );
}

export default Registration;
