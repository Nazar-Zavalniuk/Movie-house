import React, { forwardRef, useState, useCallback } from "react";
import "./PrimaryPasswordInput.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import Eye from "../../Eye/Eye";
import classNames from "classnames";

const PrimaryPasswordInput = forwardRef(
  (
    {
      classNameWrapper,
      password,
      setPassword,
      showPassword,
      setShowPassword,
      isPasswordValid = true,
      setIsPasswordValid,
      warningMessage,
      setWarningMessage,
      placeholder,
      disabled,
      tabIndexInput,
      tabIndexShowPassBtn,
      sizeShowPassBtn,
      ...props
    },
    ref
  ) => {
    const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
    const typeInput = showPassword ? "text" : "password";

    const togglePasswordVisibility = useCallback(() => {
      setShowPassword(!showPassword);
    }, [showPassword, setShowPassword]);

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
      setWarningMessage("");
      setIsPasswordInputFocused(true);
    }, [setIsPasswordValid, setWarningMessage]);

    const onBlurPassword = useCallback(() => {
      setIsPasswordInputFocused(false);
    }, []);

    const classNamePasswordInputWrapper = classNames(
      "primary-password-input-wrapper",
      classNameWrapper
    );
    const classNameBody = classNames(
      "primary-password-input-body",
      {
        focused: isPasswordInputFocused,
      },
      { invalid: !isPasswordValid }
    );

    return (
      <div className={classNamePasswordInputWrapper}>
        <div className={classNameBody}>
          <PrimaryInput
            ref={ref}
            className="password-input"
            type={typeInput}
            value={password}
            placeholder={placeholder}
            tabIndex={tabIndexInput}
            disabled={disabled ? "disabled" : ""}
            onChange={onChangePassword}
            onFocus={onFocusPassword}
            onBlur={onBlurPassword}
          />
          {password !== "" && (
            <Eye
              className="show-password-btn"
              eyeSize={sizeShowPassBtn}
              tabIndex={tabIndexShowPassBtn}
              open={showPassword}
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
);

export default PrimaryPasswordInput;
