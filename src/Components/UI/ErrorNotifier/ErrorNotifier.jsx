import React from "react";
import "./ErrorNotifier.css";
import classNames from "classnames";

function ErrorNotifier({ visible = true, ...props }) {
  const classNameRegErrorMsg = classNames("registration-error-message", {
    visible,
  });

  return (
    <div className={classNameRegErrorMsg}>
      <div className="message-title">Помилка!</div>
      <div className="message">Щось пішло не так, спробуйте знову.</div>
    </div>
  );
}

export default ErrorNotifier;
