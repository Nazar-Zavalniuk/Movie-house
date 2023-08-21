import React from "react";
import "./RegistrationErrorMessage.css";

function RegistrationErrorMessage(props) {
  return (
    <div className="registration-error-message">
      <div className="message-title">Помилка!</div>
      <div className="message">Щось пішло не так, спробуйте знову.</div>
    </div>
  );
}

export default RegistrationErrorMessage;
