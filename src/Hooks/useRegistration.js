import { useNavigate } from "react-router-dom";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useCallback, useState } from "react";
import MoviesService from "../API/MoviesService";

function useRegistration(
  login,
  password,
  setIsLoginValid,
  setLoginWarningMessage,
  setRegistrationError
) {
  const { setUsername } = useAppState();
  const navigate = useNavigate();

  const addNewUser = useCallback(
    async (user) => {
      await MoviesService.addNewUser(user);
      setUsername(user.username);
      navigate("/homepage");
      localStorage.setItem("username", user.username);
    },
    [setUsername, navigate]
  );

  const [registrationInProgress, setRegistrationInProgress] = useState(false);

  const registration = useCallback(async () => {
    try {
      setRegistrationInProgress(true);
      const response = await MoviesService.getUserByName(login);
      const isUserRegistered = response.data.records.length !== 0;

      if (isUserRegistered) {
        setIsLoginValid(false);
        setLoginWarningMessage("Логін вже зайнятий іншим користувачем.");
      } else {
        const newUser = {
          username: login,
          userPassword: password,
        };

        await addNewUser(newUser);
      }
      setRegistrationInProgress(false);
    } catch {
      setTimeout(() => {
        setRegistrationError(true);
        setRegistrationInProgress(false);
      }, 200);
    }
  }, [
    login,
    setIsLoginValid,
    setLoginWarningMessage,
    password,
    addNewUser,
    setRegistrationError,
  ]);

  return [registration, registrationInProgress];
}

export default useRegistration;
