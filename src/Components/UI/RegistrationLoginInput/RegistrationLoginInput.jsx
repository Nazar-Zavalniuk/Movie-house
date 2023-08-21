import React, { useCallback } from "react";
import "./RegistrationLoginInput.css";
import classNames from "classnames";
import PrimaryInput from "../PrimaryInput/PrimaryInput";

function RegistrationLoginInput({
  login,
  setLogin,
  isLoginValid,
  setIsLoginValid,
  warningMessage,
  setWarningMessage,
  disabled,
  ...props
}) {
  const classNameEmail = classNames("login", {
    invalid: !isLoginValid,
  });

  const onChangeLogin = useCallback(
    (e) => {
      setLogin(e.target.value);
    },
    [setLogin]
  );

  const resetLoginValidationState = useCallback(() => {
    setIsLoginValid(true);
    setWarningMessage("");
  }, [setIsLoginValid, setWarningMessage]);

  return (
    <div className="login-box">
      <PrimaryInput
        {...props}
        className={classNameEmail}
        type="text"
        value={login}
        placeholder="Логін"
        disabled={disabled ? "disabled" : ""}
        tabIndex={1}
        onChange={onChangeLogin}
        onFocus={resetLoginValidationState}
      />
      {!isLoginValid && <div className="warning-message">{warningMessage}</div>}
    </div>
  );
}

export default RegistrationLoginInput;
