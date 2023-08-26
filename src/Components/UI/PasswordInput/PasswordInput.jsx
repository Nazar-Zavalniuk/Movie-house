import React, { useState, useCallback } from "react";
import "./PasswordInput.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import Eye from "../Eye/Eye";
import classNames from "classnames";

function PasswordInput({
  password,
  setPassword,
  isPasswordValid,
  setIsPasswordValid,
  disabled,
  ...props
}) {
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const [typeInput, setTypeInput] = useState("password");
  const isPasswordVisible = typeInput === "text";

  const togglePasswordVisibility = useCallback(() => {
    if (typeInput === "text") {
      setTypeInput("password");
    } else {
      setTypeInput("text");
    }
  }, [typeInput]);

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
    setIsPasswordValid(true);
    setIsPasswordInputFocused(true);
  }, [setIsPasswordValid]);

  const onBlurPassword = useCallback(() => {
    setIsPasswordInputFocused(false);
  }, []);

  const classNamePasswordInputWrapper = classNames(
    "password-input-wrapper",
    {
      focused: isPasswordInputFocused,
    },
    { invalid: !isPasswordValid }
  );

  return (
    <div className="password-box">
      <div className={classNamePasswordInputWrapper}>
        <PrimaryInput
          className="password-input"
          id="password"
          type={typeInput}
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
            open={isPasswordVisible}
            onClick={togglePasswordVisibility}
            onKeyDown={togglePasswordVisibilityByEnter}
          />
        )}
      </div>
      {!isPasswordValid && (
        <div className="password-warning-message">Невірний пароль.</div>
      )}
    </div>
  );
}

export default PasswordInput;
