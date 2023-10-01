import React from "react";
import "./TemporaryPage.css";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";

function TemporaryPage(props) {
  return (
    <div className="temporary-page page">
      <Header />
      <div className="message">
        Cторінка на даний момент знаходиться в розробці.
      </div>
      <Footer />
    </div>
  );
}

export default TemporaryPage;
