import React, { useCallback, useState } from "react";
import "./UserSettingsBody.css";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import ChangePasswordForm from "../Forms/ChangePasswordForm/ChangePasswordForm";
import { FaUser } from "react-icons/fa";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import ChangePasswordLoader from "../Loaders/ChangePasswordLoader/ChangePasswordLoader";
import { useNavigate } from "react-router-dom";

function UserSettingsBody(props) {
  const { username, setUsername } = useAppState();
  const [changePasswordInProgress, setChangePasswordInProgress] =
    useState(false);
  const navigate = useNavigate();

  const logOut = useCallback(() => {
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/homepage");
  }, [navigate, setUsername]);

  return (
    <div className="user-settings-body">
      <div className="user-settings">
        <div className="settings">
          <div className="user-info">
            <div className="user-about">
              <div className="avatar-info">
                <FaUser size={50} />
              </div>
              <div className="name-info">{username}</div>
            </div>
            <PrimaryButton
              className="log-out-btn"
              tabIndex={1}
              onClick={logOut}
            >
              Вийти
            </PrimaryButton>
          </div>
          <ChangePasswordLoader visible={changePasswordInProgress} />
          <ChangePasswordForm
            changePasswordInProgress={changePasswordInProgress}
            setChangePasswordInProgress={setChangePasswordInProgress}
          />
        </div>
      </div>
    </div>
  );
}

export default UserSettingsBody;
