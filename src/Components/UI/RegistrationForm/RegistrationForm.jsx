import React, { useState, useCallback, useEffect } from "react";
import "./RegistrationForm.css";
import MoviesService from "../../../API/MoviesService";
import RegistrationLoginInput from "../RegistrationLoginInput/RegistrationLoginInput";
import RegistrationPasswordInput from "../RegistrationPasswordInput/RegistrationPasswordInput";
import { passwordValidation, loginValidation } from "../../../Utils/Validation";
import RegistrationFormButtons from "../RegistrationFormButtons/RegistrationFormButtons";
import useAppState from "../../../Context/Hook/useAppState";
import { useNavigate } from "react-router-dom";
import PrimaryOverlay from "../PrimaryOverlay/PrimaryOverlay";

function RegistrationForm({ setVerificationError, ...props }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginWarningMessage, setLoginWarningMessage] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [humanConfirmation, setHumanConfirmation] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const { setUserName } = useAppState();
  const navigate = useNavigate();

  const addNewUser = useCallback(
    async (user) => {
      await MoviesService.addNewUser(user);
      setUserName(user.userName);
      navigate("/homepage");
    },
    [setUserName, navigate]
  );

  const [verification, setVerification] = useState(false);
  const userVerification = useCallback(async () => {
    try {
      setVerification(true);
      const user = await MoviesService.getUserByName(login);
      const userAlreadyExists = user.length !== 0;

      if (userAlreadyExists) {
        setIsLoginValid(false);
        setLoginWarningMessage("Логін вже зайнятий іншим користувачем.");
      } else {
        const newUser = {
          userName: login,
          userPassword: password,
        };

        await addNewUser(newUser);
      }
      setVerification(false);
    } catch {
      setTimeout(() => {
        setVerificationError(true);
        setVerification(false);
      }, 200);
    }
  }, [login, password, addNewUser, setVerificationError]);

  const checkForm = useCallback(() => {
    const loginValidationResult = loginValidation(login);
    const passwordValidationResult = passwordValidation(password);

    setIsLoginValid(loginValidationResult.state);
    setIsPasswordValid(passwordValidationResult.state);
    setLoginWarningMessage(loginValidationResult.message);
    setPasswordWarningMessage(passwordValidationResult.message);

    return loginValidationResult.state && passwordValidationResult.state;
  }, [login, password]);

  const submitForm = useCallback(
    (e) => {
      setHumanConfirmation(false);
      setVerificationError(false);

      const isFormValid = checkForm();
      if (isFormValid) {
        userVerification();
      }

      e.preventDefault();
    },
    [checkForm, userVerification, setVerificationError]
  );

  useEffect(() => {
    const isFormValid = isLoginValid && isPasswordValid && humanConfirmation;
    setIsFormValid(isFormValid);
  }, [isLoginValid, isPasswordValid, humanConfirmation]);

  const isOverlayActive = verification;

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
      <RegistrationPasswordInput
        password={password}
        setPassword={setPassword}
        isPasswordValid={isPasswordValid}
        setIsPasswordValid={setIsPasswordValid}
        warningMessage={passwordWarningMessage}
        setWarningMessage={setPasswordWarningMessage}
        disabled={isOverlayActive}
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
