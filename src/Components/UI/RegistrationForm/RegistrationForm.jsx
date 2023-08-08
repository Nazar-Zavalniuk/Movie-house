import React, { useState, useCallback } from "react";
import "./RegistrationForm.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function RegistrationForm(props) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");

  const onChangeLogin = useCallback((e) => {
    setLogin(e.target.value);
  }, []);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const submitForm = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form className="registration-form" onSubmit={submitForm}>
      <PrimaryInput
        className="login"
        type="text"
        value={login}
        placeholder="Логін"
        onChange={onChangeLogin}
      />
      <PrimaryInput
        className="email"
        type="text"
        value={email}
        placeholder="Емейл (для отримання пароля)"
        onChange={onChangeEmail}
      />
      <div className="registration-form-buttons">
        <div className="checking-for-a-person">
          <label htmlFor="check-a-person">Я не робот</label>
          <input
            type="checkbox"
            className="check-a-person"
            id="check-a-person"
          />
        </div>
        <PrimaryButton className="registration-btn">Регістрация</PrimaryButton>
      </div>
    </form>
  );
}

export default RegistrationForm;
