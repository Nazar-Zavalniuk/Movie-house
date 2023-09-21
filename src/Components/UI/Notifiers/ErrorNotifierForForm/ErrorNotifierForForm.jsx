import React from "react";
import "./ErrorNotifierForForm.css";
import classNames from "classnames";

function ErrorNotifierForForm({ className, visible = true, ...props }) {
  const classNameRegErrorMsg = classNames(
    "error-notifier-for-form",
    className,
    {
      visible,
    }
  );

  return (
    <div className={classNameRegErrorMsg}>
      <div className="message-title">Помилка!</div>
      <div className="message">Щось пішло не так, спробуйте знову.</div>
    </div>
  );
}

export default ErrorNotifierForForm;
