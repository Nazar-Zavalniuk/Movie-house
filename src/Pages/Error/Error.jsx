import React from "react";
import "./Error.css";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import ErrorInfo from "../../Components/UI/ErrorInfo/ErrorInfo";
import HelpWithError from "../../Components/UI/HelpWithError/HelpWithError";

function Error(props) {
  return (
    <div className="page error">
      <div className="body-error">
        <Header includesSearchBar={false} />
        <div className="error-info-body">
          <ErrorInfo />
          <HelpWithError />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Error;
