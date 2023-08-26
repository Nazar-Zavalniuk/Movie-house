import React from "react";
import "./LoginFormButtons.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import classNames from "classnames";

function LoginFormButtons({ disabled, ...props }) {
  const classNameLoginBtn = classNames("login-btn", { disabled });

  return (
    <div className="login-form-buttons">
      <div className="remember-body">
        <label htmlFor="remember">Запам'ятати мене</label>
        <input type="checkbox" className="remember" id="remember" />
      </div>
      <PrimaryButton
        className={classNameLoginBtn}
        disabled={disabled ? "disabled" : ""}
      >
        Увійти
      </PrimaryButton>
    </div>
  );
}

export default LoginFormButtons;
