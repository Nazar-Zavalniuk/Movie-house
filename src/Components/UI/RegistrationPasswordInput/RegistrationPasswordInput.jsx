import React, { useCallback, useState } from "react";
import "./RegistrationPasswordInput.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import classNames from "classnames";
import Eye from "../Eye/Eye";

function RegistrationPasswordInput({
  password,
  setPassword,
  isPasswordValid,
  setIsPasswordValid,
  warningMessage,
  setWarningMessage,
  disabled,
  ...props
}) {
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = useCallback(() => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
  }, [inputType]);

  const togglePasswordVisibilityByEnter = useCallback(
    (e) => {
      if (e.keyCode === 13) togglePasswordVisibility();
    },
    [togglePasswordVisibility]
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const onFocusPassword = useCallback(() => {
    setIsPasswordInputFocused(true);
    resetEmailValidationState();
  }, []);

  const onBlurPassword = useCallback(() => {
    setIsPasswordInputFocused(false);
  }, []);

  const resetEmailValidationState = useCallback(() => {
    setIsPasswordValid(true);
    setWarningMessage("");
  }, [setIsPasswordValid, setWarningMessage]);

  const classNamePasswordBody = classNames("password-body", {
    invalid: !isPasswordValid,
  });

  return (
    <div className="password-box">
      <div
        className={classNamePasswordBody}
        style={{ outline: isPasswordInputFocused ? "1px solid" : "" }}
      >
        <PrimaryInput
          className="password-input"
          id="password"
          type={inputType}
          value={password}
          placeholder="Пароль"
          tabIndex={2}
          disabled={disabled ? "disabled" : ""}
          onChange={onChangePassword}
          onFocus={onFocusPassword}
          onBlur={onBlurPassword}
        />
        {password !== "" && (
          <Eye
            className="show-password-btn"
            tabIndex={3}
            open={inputType === "text"}
            onClick={togglePasswordVisibility}
            onKeyDown={togglePasswordVisibilityByEnter}
          />
        )}
      </div>
      {!isPasswordValid && (
        <div className="warning-message">{warningMessage}</div>
      )}
    </div>
  );
}

export default RegistrationPasswordInput;
