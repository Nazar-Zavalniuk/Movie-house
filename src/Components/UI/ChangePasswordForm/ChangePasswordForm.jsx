import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ChangePasswordForm.css";
import PrimaryPasswordInput from "../PrimaryPasswordInput/PrimaryPasswordInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import useAppState from "../../../Context/Hook/useAppState";
import MovieService from "../../../API/MoviesService";
import classNames from "classnames";
import MoviesService from "../../../API/MoviesService";
import { newPasswordValidation } from "../../../Utils/Validation";

function ChangePasswordForm({
  passwordValidationInProgress,
  setPasswordValidationInProgress,
  ...props
}) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isOldPasswordValid, setIsOldPasswordValid] = useState(true);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);

  const [oldPasswordWarningMessage, setOldPasswordWarningMessage] =
    useState("");
  const [newPasswordWarningMessage, setNewPasswordWarningMessage] =
    useState("");

  const { userName, setIsPasswordUpdated, setPasswordChangeError } =
    useAppState();

  const passwordsValidation = useCallback(async () => {
    try {
      setPasswordValidationInProgress(true);
      const userArr = await MovieService.getUserByName(userName);
      const [user] = userArr;

      if (user.userPassword !== oldPassword) {
        setIsOldPasswordValid(false);
        setOldPasswordWarningMessage("Невірний пароль.");
      } else {
        const newPasswordValidationResult = newPasswordValidation(
          newPassword,
          oldPassword
        );

        if (newPasswordValidationResult.state) {
          await MoviesService.updateUserData(user.id, {
            userPassword: newPassword,
          });

          setOldPassword("");
          setNewPassword("");
          setIsPasswordUpdated(true);
        } else {
          setIsNewPasswordValid(newPasswordValidationResult.state);
          setNewPasswordWarningMessage(newPasswordValidationResult.message);
        }
      }
      setPasswordValidationInProgress(false);
    } catch {
      setTimeout(() => {
        setPasswordValidationInProgress(false);
        setPasswordChangeError(true);
      }, 200);
    }
  }, [
    userName,
    oldPassword,
    newPassword,
    setPasswordValidationInProgress,
    setPasswordChangeError,
    setIsPasswordUpdated,
  ]);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  const submitForm = useCallback(
    (e) => {
      setIsPasswordUpdated(false);
      setPasswordChangeError(false);

      setShowOldPassword(false);
      setShowNewPassword(false);
      oldPasswordRef.current.blur();
      newPasswordRef.current.blur();

      passwordsValidation();
      e.preventDefault();
    },
    [passwordsValidation, setPasswordChangeError, setIsPasswordUpdated]
  );

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    const isFormValid = isOldPasswordValid && isNewPasswordValid;
    setIsFormValid(isFormValid);
  }, [isOldPasswordValid, isNewPasswordValid]);

  const isBtnDisabled =
    passwordValidationInProgress ||
    !isFormValid ||
    oldPassword === "" ||
    newPassword === "";

  const classNameBtn = classNames("change-password-btn", {
    disabled: isBtnDisabled,
  });

  return (
    <form className="change-password-form" onSubmit={submitForm}>
      <div className="header-form">Зміна паролю</div>
      <PrimaryPasswordInput
        classNameWrapper="old-password"
        password={oldPassword}
        setPassword={setOldPassword}
        showPassword={showOldPassword}
        setShowPassword={setShowOldPassword}
        isPasswordValid={isOldPasswordValid}
        setIsPasswordValid={setIsOldPasswordValid}
        warningMessage={oldPasswordWarningMessage}
        setWarningMessage={setOldPasswordWarningMessage}
        placeholder="Введіть старий пароль"
        tabIndexInput={2}
        tabIndexShowPassBtn={3}
        disabled={passwordValidationInProgress}
        ref={oldPasswordRef}
      />
      <PrimaryPasswordInput
        classNameWrapper="new-password"
        password={newPassword}
        setPassword={setNewPassword}
        showPassword={showNewPassword}
        setShowPassword={setShowNewPassword}
        isPasswordValid={isNewPasswordValid}
        setIsPasswordValid={setIsNewPasswordValid}
        warningMessage={newPasswordWarningMessage}
        setWarningMessage={setNewPasswordWarningMessage}
        placeholder="Введіть новий пароль"
        tabIndexInput={4}
        tabIndexShowPassBtn={5}
        disabled={passwordValidationInProgress}
        ref={newPasswordRef}
      />
      <PrimaryButton
        className={classNameBtn}
        disabled={isBtnDisabled}
        tabIndex={6}
      >
        Змінити пароль
      </PrimaryButton>
    </form>
  );
}

export default ChangePasswordForm;
