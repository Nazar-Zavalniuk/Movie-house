import React, { useState } from "react";
import "./LoginBody.css";
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";
import ErrorNotifierForForm from "../../UI/ErrorNotifierForForm/ErrorNotifierForForm";

function LoginBody(props) {
  const [verificationError, setVerificationError] = useState(false);

  return (
    <div className="login-body">
      <ErrorNotifierForForm visible={verificationError} />
      <LoginForm setVerificationError={setVerificationError} />
      <div className="links">
        <Link className="registration-link" to="/registration">
          Реєстрація
        </Link>
      </div>
    </div>
  );
}

export default LoginBody;
