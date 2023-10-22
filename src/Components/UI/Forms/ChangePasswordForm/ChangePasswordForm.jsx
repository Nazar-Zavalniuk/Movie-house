import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ChangePasswordForm.css";
import PrimaryPasswordInput from "../../Inputs/PrimaryPasswordInput/PrimaryPasswordInput";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import { useAppState } from "../../../../Context/AppStateProvider/AppStateProvider";
import classNames from "classnames";
import useChangePassword from "../../../../Hooks/useChangePassword";

function ChangePasswordForm({
  changePasswordInProgress,
  setChangePasswordInProgress,
  ...props
}) {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isOldPasswordValid, setIsOldPasswordValid] = useState(true);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);

  const [oldPasswordWarningMessage, setOldPasswordWarningMessage] =
    useState("");
  const [newPasswordWarningMessage, setNewPasswordWarningMessage] =
    useState("");

  const { setIsPasswordUpdated, setPasswordChangeError } = useAppState();

  const [changePassword] = useChangePassword(
    newPassword,
    setNewPassword,
    setIsNewPasswordValid,
    setNewPasswordWarningMessage,
    oldPassword,
    setOldPassword,
    setIsOldPasswordValid,
    setOldPasswordWarningMessage,
    setChangePasswordInProgress
  );

  const submitForm = useCallback(
    (e) => {
      setIsPasswordUpdated(false);
      setPasswordChangeError(false);

      setShowOldPassword(false);
      setShowNewPassword(false);
      oldPasswordRef.current.blur();
      newPasswordRef.current.blur();

      changePassword();
      e.preventDefault();
    },
    [changePassword, setPasswordChangeError, setIsPasswordUpdated]
  );

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    const isFormValid = isOldPasswordValid && isNewPasswordValid;
    setIsFormValid(isFormValid);
  }, [isOldPasswordValid, isNewPasswordValid]);

  const isBtnDisabled =
    changePasswordInProgress ||
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
        disabled={changePasswordInProgress}
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
        disabled={changePasswordInProgress}
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
