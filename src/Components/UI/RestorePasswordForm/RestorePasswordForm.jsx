import React, { useState, useCallback } from "react";
import "./RestorePasswordForm.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function RestorePasswordForm(props) {
  const [email, setEmail] = useState("");

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const submitForm = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form className="restore-password-form" onSubmit={submitForm}>
      <div className="header-from">
        Введіть e-mail, вказаний Вами під час реєстрації
      </div>
      <PrimaryInput
        className="email"
        type="text"
        value={email}
        placeholder="Емейл (для отримання пароля)"
        onChange={onChangeEmail}
      />
      <PrimaryButton className="get-new-password-btn">
        Отримати новий пароль
      </PrimaryButton>
    </form>
  );
}

export default RestorePasswordForm;
