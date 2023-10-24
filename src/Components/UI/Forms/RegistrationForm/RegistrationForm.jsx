import React, { useState, useCallback, useEffect } from "react";
import "./RegistrationForm.css";
import RegistrationLoginInput from "../../Inputs/RegistrationLoginInput/RegistrationLoginInput";
import {
  passwordValidation,
  loginValidation,
} from "../../../../Utils/Validation";
import RegistrationFormButtons from "../../Buttons/RegistrationFormButtons/RegistrationFormButtons";
import PrimaryOverlay from "../../PrimaryOverlay/PrimaryOverlay";
import PrimaryPasswordInput from "../../Inputs/PrimaryPasswordInput/PrimaryPasswordInput";
import useRegistration from "../../../../Hooks/useRegistration";

function RegistrationForm({ setRegistrationError, ...props }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginWarningMessage, setLoginWarningMessage] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [humanConfirmation, setHumanConfirmation] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [registration, registrationInProgress] = useRegistration(
    login,
    password,
    setIsLoginValid,
    setLoginWarningMessage,
    setRegistrationError
  );

  const validateForm = useCallback(() => {
    const loginValidationResult = loginValidation(login);
    const passwordValidationResult = passwordValidation(password);

    setIsLoginValid(loginValidationResult.state);
    setIsPasswordValid(passwordValidationResult.state);
    setLoginWarningMessage(loginValidationResult.message);
    setPasswordWarningMessage(passwordValidationResult.message);

    return loginValidationResult.state && passwordValidationResult.state;
  }, [login, password]);

  const [showPassword, setShowPassword] = useState(false);

  const submitForm = useCallback(
    (e) => {
      setHumanConfirmation(false);
      setRegistrationError(false);

      setShowPassword(false);

      const isFormValid = validateForm();
      if (isFormValid) {
        registration();
      }

      e.preventDefault();
    },
    [validateForm, registration, setRegistrationError]
  );

  useEffect(() => {
    const isFormValid = isLoginValid && isPasswordValid && humanConfirmation;
    setIsFormValid(isFormValid);
  }, [isLoginValid, isPasswordValid, humanConfirmation]);

  const isOverlayActive = registrationInProgress;

  return (
    <form className="registration-form" onSubmit={submitForm}>
      <RegistrationLoginInput
        login={login}
        setLogin={setLogin}
        isLoginValid={isLoginValid}
        setIsLoginValid={setIsLoginValid}
        warningMessage={loginWarningMessage}
        setWarningMessage={setLoginWarningMessage}
        disabled={isOverlayActive}
      />
      <PrimaryPasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        isPasswordValid={isPasswordValid}
        setIsPasswordValid={setIsPasswordValid}
        warningMessage={passwordWarningMessage}
        setWarningMessage={setPasswordWarningMessage}
        disabled={isOverlayActive}
        tabIndexInput={2}
        tabIndexShowPassBtn={3}
        placeholder="Пароль"
      />
      <RegistrationFormButtons
        humanConfirmation={humanConfirmation}
        setHumanConfirmation={setHumanConfirmation}
        disabled={!isFormValid}
      />
      <PrimaryOverlay
        className="registration-overlay"
        isOverlayActive={isOverlayActive}
      />
    </form>
  );
}

export default RegistrationForm;
