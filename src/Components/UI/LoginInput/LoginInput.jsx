import React, { useCallback } from "react";
import "./LoginInput.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import classNames from "classnames";

function LoginInput({
  login,
  setLogin,
  isLoginValid,
  setIsLoginValid,
  disabled,
  ...props
}) {
  const onChangeLogin = useCallback(
    (e) => {
      setLogin(e.target.value);
    },
    [setLogin]
  );

  const resetValidationState = useCallback(() => {
    setIsLoginValid(true);
  }, [setIsLoginValid]);

  const classNameLoginInput = classNames("login-input", {
    invalid: !isLoginValid,
  });

  return (
    <div className="login-box">
      <PrimaryInput
        className={classNameLoginInput}
        id="login"
        type="text"
        value={login}
        placeholder="Логін"
        tabIndex={1}
        disabled={disabled ? "disabled" : ""}
        onChange={onChangeLogin}
        onFocus={resetValidationState}
      />
      {!isLoginValid && (
        <div className="login-warning-message">Невірний логін.</div>
      )}
    </div>
  );
}

export default LoginInput;
