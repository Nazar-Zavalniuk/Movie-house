import React, { useCallback, useState } from "react";
import "./LoginForm.css";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Eye from "../Eye/Eye";

function LoginForm(props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const typePasswodInput = isPasswordVisible ? "text" : "password";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const togglePasswordVisibilityByEnter = useCallback(
    (e) => {
      if (e.keyCode === 13) togglePasswordVisibility();
    },
    [togglePasswordVisibility]
  );

  const onChangeLogin = useCallback((e) => {
    setLogin(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onFocusPassword = useCallback(() => {
    setIsPasswordInputFocused(true);
  }, []);

  const onBlurPassword = useCallback(() => {
    setIsPasswordInputFocused(false);
  }, []);

  const submitForm = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form className="login-form" onSubmit={submitForm}>
      <PrimaryInput
        className="login"
        id="login"
        type="text"
        value={login}
        placeholder="Логін"
        tabIndex={1}
        onChange={onChangeLogin}
      />
      <div
        className="password"
        style={{ outline: isPasswordInputFocused ? "1px solid" : "" }}
      >
        <PrimaryInput
          className="password-input"
          id="password"
          type={typePasswodInput}
          value={password}
          placeholder="Пароль"
          tabIndex={2}
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
      <div className="login-form-buttons">
        <div className="remember-body">
          <label htmlFor="remember">Запам'ятати мене</label>
          <input type="checkbox" className="remember" id="remember" />
        </div>
        <PrimaryButton className="login-btn">Увійти</PrimaryButton>
      </div>
    </form>
  );
}

export default LoginForm;
