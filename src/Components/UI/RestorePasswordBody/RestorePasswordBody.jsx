import React from "react";
import "./RestorePasswordBody.css";
import { Link } from "react-router-dom";
import RestorePasswordForm from "../RestorePasswordForm/RestorePasswordForm";

function RestorePasswordBody(props) {
  return (
    <div className="restore-password-body">
      <RestorePasswordForm />
      <div className="links">
        <Link className="login-link" to="/login">
          Вхід
        </Link>
        <Link className="registration-link" to="/registration">
          Регістрация
        </Link>
      </div>
    </div>
  );
}

export default RestorePasswordBody;
