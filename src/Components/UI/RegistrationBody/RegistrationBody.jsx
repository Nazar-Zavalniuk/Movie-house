import React, { useState } from "react";
import "./RegistrationBody.css";
import { Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import RegistrationErrorMessage from "../RegistrationErrorMessage/RegistrationErrorMessage";

function RegistrationBody(props) {
  const [userEntryError, setUserEntryError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  return (
    <div className="registration-body">
      {(userEntryError || loginError) && <RegistrationErrorMessage />}
      <RegistrationForm
        setUserEntryError={setUserEntryError}
        setLoginError={setLoginError}
      />
      <div className="links">
        <Link className="login-link" to="/login">
          Вхід
        </Link>
      </div>
    </div>
  );
}

export default RegistrationBody;
