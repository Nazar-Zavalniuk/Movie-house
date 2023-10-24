import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import MoviesService from "../API/MoviesService";
import { newPasswordValidation } from "../Utils/Validation";

function useChangePassword(
  newPassword,
  setNewPassword,
  setIsNewPasswordValid,
  setNewPasswordWarningMessage,
  oldPassword,
  setOldPassword,
  setIsOldPasswordValid,
  setOldPasswordWarningMessage,
  setChangePasswordInProgress
) {
  const { username, setIsPasswordUpdated, setPasswordChangeError } =
    useAppState();

  const changePassword = useCallback(async () => {
    try {
      setChangePasswordInProgress(true);
      const response = await MoviesService.getUserByName(username);
      const user = response.data.records[0]["fields"];

      if (user.userPassword !== oldPassword) {
        setIsOldPasswordValid(false);
        setOldPasswordWarningMessage("Невірний пароль.");
      } else {
        const newPasswordValidationResult = newPasswordValidation(
          newPassword,
          oldPassword
        );

        if (newPasswordValidationResult.state) {
          await MoviesService.updateUserData(user.id, {
            userPassword: newPassword,
          });

          setOldPassword("");
          setNewPassword("");
          setIsPasswordUpdated(true);
        } else {
          setIsNewPasswordValid(newPasswordValidationResult.state);
          setNewPasswordWarningMessage(newPasswordValidationResult.message);
        }
      }
      setChangePasswordInProgress(false);
    } catch {
      setTimeout(() => {
        setChangePasswordInProgress(false);
        setPasswordChangeError(true);
      }, 200);
    }
  }, [
    username,
    oldPassword,
    newPassword,
    setChangePasswordInProgress,
    setPasswordChangeError,
    setIsPasswordUpdated,
    setIsNewPasswordValid,
    setIsOldPasswordValid,
    setNewPassword,
    setNewPasswordWarningMessage,
    setOldPassword,
    setOldPasswordWarningMessage,
  ]);

  return [changePassword];
}

export default useChangePassword;
