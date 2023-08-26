import React from "react";
import "./RegistrationFormButtons.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import classNames from "classnames";

function RegistrationFormButtons({
  humanConfirmation,
  setHumanConfirmation,
  disabled,
  ...props
}) {
  const classNameRegBtn = classNames("registration-btn", {
    disabled,
  });

  const handleCheckboxChange = (event) => {
    setHumanConfirmation(event.target.checked);
  };

  return (
    <div className="registration-form-buttons">
      <div className="checking-for-a-person">
        <label htmlFor="check-a-person">Я не робот</label>
        <input
          type="checkbox"
          className="check-a-person"
          id="check-a-person"
          checked={humanConfirmation}
          onChange={handleCheckboxChange}
        />
      </div>
      <PrimaryButton
        className={classNameRegBtn}
        disabled={disabled ? "disabled" : ""}
      >
        Регістрация
      </PrimaryButton>
    </div>
  );
}

export default RegistrationFormButtons;
