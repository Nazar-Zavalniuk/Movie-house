import React from "react";
import "./LoginBody.css";
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";

function LoginBody(props) {
  return (
    <div className="login-body">
      <LoginForm />
      <div className="links">
        <Link className="registration-link" to="/registration">
          Реєстрація
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

export default LoginBody;
