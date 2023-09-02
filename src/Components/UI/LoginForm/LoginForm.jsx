import React, { useCallback, useRef, useState } from "react";
import "./LoginForm.css";
import LoginInput from "../LoginInput/LoginInput";
import LoginFormButtons from "../LoginFormButtons/LoginFormButtons";
import MoviesService from "../../../API/MoviesService";
import PrimaryOverlay from "../PrimaryOverlay/PrimaryOverlay";
import useAppState from "../../../Context/Hook/useAppState";
import { useNavigate } from "react-router-dom";
import PrimaryPasswordInput from "../PrimaryPasswordInput/PrimaryPasswordInput";

function LoginForm({ setVerificationError, ...props }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginValid, setIsLoginValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  const [verification, setVerification] = useState(false);
  const { setUserName } = useAppState();
  const navigate = useNavigate();

  const userVerification = useCallback(async () => {
    try {
      setVerification(true);
      const userArr = await MoviesService.getUserByName(login);
      const [user] = userArr;
      setVerification(false);

      if (!user) {
        setIsLoginValid(false);
      } else {
        const isPasswordValid = user.userPassword === password;

        if (isPasswordValid) {
          setUserName(login);
          navigate("/homepage");
          localStorage.setItem("userName", login);
        } else {
          setIsPasswordValid(false);
          setPasswordWarningMessage("Невірний пароль.");
        }
      }
    } catch {
      setTimeout(() => {
        setVerificationError(true);
        setVerification(false);
      }, 200);
    }
  }, [
    login,
    password,
    setVerification,
    setVerificationError,
    setUserName,
    navigate,
  ]);

  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef(null);

  const submitForm = useCallback(
    (e) => {
      setVerificationError(false);
      setShowPassword(false);
      passwordInputRef.current.blur();

      userVerification();
      e.preventDefault();
    },
    [userVerification, setVerificationError]
  );

  const isOverlayActive = verification;
  const isFormValid =
    login !== "" && isLoginValid && password !== "" && isPasswordValid;

  return (
    <form className="login-form" onSubmit={submitForm}>
      <LoginInput
        login={login}
        setLogin={setLogin}
        isLoginValid={isLoginValid}
        setIsLoginValid={setIsLoginValid}
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
        placeholder="Пароль"
        tabIndexInput={2}
        tabIndexShowPassBtn={3}
        ref={passwordInputRef}
      />
      <LoginFormButtons disabled={!isFormValid || isOverlayActive} />
      <PrimaryOverlay
        className="overlay-login"
        isOverlayActive={isOverlayActive}
      />
    </form>
  );
}

export default LoginForm;
