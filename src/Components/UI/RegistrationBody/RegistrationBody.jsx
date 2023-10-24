import React, { useState } from "react";
import "./RegistrationBody.css";
import { Link } from "react-router-dom";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";
import ErrorNotifierForForm from "../Notifiers/ErrorNotifierForForm/ErrorNotifierForForm";

function RegistrationBody(props) {
  const [registrationError, setRegistrationError] = useState(false);

  return (
    <div className="registration-body">
      <ErrorNotifierForForm visible={registrationError} />
      <RegistrationForm setRegistrationError={setRegistrationError} />
      <div className="links">
        <Link className="login-link" to="/login">
          Вхід
        </Link>
      </div>
    </div>
  );
}

export default RegistrationBody;
