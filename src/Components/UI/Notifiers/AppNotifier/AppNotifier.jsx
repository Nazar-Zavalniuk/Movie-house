import React, { useEffect } from "react";
import "./AppNotifier.css";
import Notifier from "../Notifier/Notifier";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAppState } from "../../../../Context/AppStateProvider/AppStateProvider";

function AppNotifier(props) {
  const {
    isPasswordUpdated,
    setIsPasswordUpdated,
    passwordChangeError,
    setPasswordChangeError,
  } = useAppState();

  useEffect(() => {
    let hideSuccessNotification;

    if (isPasswordUpdated) {
      hideSuccessNotification = setTimeout(() => {
        setIsPasswordUpdated(false);
      }, 3000);
    }

    return () => {
      clearTimeout(hideSuccessNotification);
    };
  }, [setIsPasswordUpdated, isPasswordUpdated]);

  useEffect(() => {
    let hideErrorNotification;

    if (passwordChangeError) {
      hideErrorNotification = setTimeout(() => {
        setPasswordChangeError(false);
      }, 3000);
    }

    return () => {
      clearTimeout(hideErrorNotification);
    };
  }, [setPasswordChangeError, passwordChangeError]);

  return (
    <div className="app-notifier">
      <div className="app-notifier-body">
        {isPasswordUpdated && (
          <Notifier className="change-password-success-notifier">
            <div className="change-password-notifier-title">
              <div>Зміна паролю</div>
              <IoMdNotificationsOutline className="change-password-notifier-icon" />
            </div>
            <p>Пароль змінено успішно!</p>
          </Notifier>
        )}
        {passwordChangeError && (
          <Notifier className="change-password-error-notifier">
            <div className="change-password-notifier-title">
              <div>Зміна паролю</div>
              <IoMdNotificationsOutline className="change-password-notifier-icon" />
            </div>
            <p>Не вдалося змінити пароль!</p>
          </Notifier>
        )}
      </div>
    </div>
  );
}

export default AppNotifier;
