import React, { useState } from "react";
import "./UserSettingsBody.css";
import useAppState from "../../../Context/Hook/useAppState";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";
import { FaUser } from "react-icons/fa";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ChangePasswordLoader from "../ChangePasswordLoader/ChangePasswordLoader";

function UserSettingsBody(props) {
  const { userName } = useAppState();
  const [passwordValidationInProgress, setPasswordValidationInProgress] =
    useState(false);

  return (
    <div className="user-settings-body">
      <div className="user-settings">
        <div className="settings">
          <div className="user-info">
            <div className="user-about">
              <div className="avatar-info">
                <FaUser size={50} />
              </div>
              <div className="name-info">{userName}</div>
            </div>
            <PrimaryButton className="log-out-btn" tabIndex={1}>
              Вийти
            </PrimaryButton>
          </div>
          <ChangePasswordLoader visible={passwordValidationInProgress} />
          <ChangePasswordForm
            passwordValidationInProgress={passwordValidationInProgress}
            setPasswordValidationInProgress={setPasswordValidationInProgress}
          />
        </div>
      </div>
    </div>
  );
}

export default UserSettingsBody;
