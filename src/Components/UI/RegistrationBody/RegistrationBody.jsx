import React from "react";
import "./RegistrationBody.css";
import { Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function RegistrationBody(props) {
  return (
    <div className="registration-body">
      <RegistrationForm />
      <div className="links">
        <Link className="login-link" to="/login">
          Вхід
        </Link>
        <Link
          className="restore-password-link"
          title="Відновлення паролю"
          to="/restore-password"
        >
          Забув пароль?
        </Link>
      </div>
    </div>
  );
}

export default RegistrationBody;
