import React, { useState, useCallback, useEffect } from "react";
import "./RegistrationForm.css";
import Loader from "../Loader/Loader";
import useFetching from "../../../Hooks/useFetching";
import MoviesService from "../../../API/MoviesService";
import RegistrationLoginInput from "../RegistrationLoginInput/RegistrationLoginInput";
import RegistrationPasswordInput from "../RegistrationPasswordInput/RegistrationPasswordInput";
import { passwordValidation, loginValidation } from "../../../Utils/Validation";
import classNames from "classnames";
import RegistrationFormButtons from "../RegistrationFormButtons/RegistrationFormButtons";
import useAppState from "../../../Context/Hook/useAppState";
import { useNavigate } from "react-router-dom";

function RegistrationForm({ setUserEntryError, setLoginError, ...props }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginWarningMessage, setLoginWarningMessage] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [humanConfirmation, setHumanConfirmation] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoginAlreadyTaken, setIsLoginAlreadyTaken] = useState(false);
  const [didTheLoginCheckSucceed, setDidTheLoginCheckSucceed] = useState(false);

  const [fetchUserByLogin, isLoginSearchInProgress, loginError] = useFetching(
    async () => {
      const user = await MoviesService.getUserByName(login);
      setIsLoginAlreadyTaken(user.length !== 0);
      setDidTheLoginCheckSucceed(user.length === 0);
    }
  );

  useEffect(() => {
    setLoginError(loginError.errorState);
  }, [loginError, setLoginError]);

  const submitForm = useCallback(
    (e) => {
      setIsLoginAlreadyTaken(false);
      setHumanConfirmation(false);

      const loginValidationResult = loginValidation(login);
      const passwordValidationResult = passwordValidation(password);
      const isFormValid =
        loginValidationResult.state && passwordValidationResult.state;

      setIsLoginValid(loginValidationResult.state);
      setIsPasswordValid(passwordValidationResult.state);
      setLoginWarningMessage(loginValidationResult.message);
      setPasswordWarningMessage(passwordValidationResult.message);

      if (isFormValid) {
        fetchUserByLogin();
      }

      e.preventDefault();
    },
    [login, password]
  );

  useEffect(() => {
    const isFormValid = isLoginValid && isPasswordValid && humanConfirmation;

    if (isFormValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isLoginValid, isPasswordValid, humanConfirmation]);

  useEffect(() => {
    if (isLoginAlreadyTaken) {
      setIsLoginValid(false);
      setLoginWarningMessage("Логін вже зайнятий іншим користувачем.");
    }
  }, [isLoginAlreadyTaken]);

  const [newUserEntryInProgress, setNewUserEntryInProgress] = useState(false);
  const { setUserName } = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    if (didTheLoginCheckSucceed) {
      const newUser = {
        userName: login,
        userPassword: password,
      };

      async function addNewUser() {
        try {
          setNewUserEntryInProgress(true);
          setUserEntryError(false);
          await MoviesService.addNewUser(newUser);
          setUserName(newUser.userName);
          navigate("/homepage");
        } catch (error) {
          setUserEntryError(true);
        } finally {
          setNewUserEntryInProgress(false);
          setDidTheLoginCheckSucceed(false);
        }
      }

      addNewUser();
    }
  }, [didTheLoginCheckSucceed]);

  const isOverlayActive = isLoginSearchInProgress || newUserEntryInProgress;

  const classNameOverlay = classNames("overlay", {
    active: isOverlayActive,
  });

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
        isFormValid={isFormValid}
      />
      <div className={classNameOverlay}>
        <Loader className="loader" size="normal" />
      </div>
    </form>
  );
}

export default RegistrationForm;
