import React, { useState } from "react";
import "./RegistrationBody.css";
import { Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ErrorNotifierForForm from "../ErrorNotifierForForm/ErrorNotifierForForm";

function RegistrationBody(props) {
  const [verificationError, setVerificationError] = useState(false);

  return (
    <div className="registration-body">
      <ErrorNotifierForForm visible={verificationError} />
      <RegistrationForm setVerificationError={setVerificationError} />
      <div className="links">
        <Link className="login-link" to="/login">
          Вхід
        </Link>
      </div>
    </div>
  );
}

export default RegistrationBody;
