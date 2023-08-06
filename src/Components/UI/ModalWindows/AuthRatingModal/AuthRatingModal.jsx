import React, { useCallback, useRef } from "react";
import "./AuthRatingModal.css";
import PrimaryModalWindow from "../PrimaryModalWindow/PrimaryModalWindow";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import useAppState from "../../../../Context/Hook/useAppState";

function AuthRatingModal({ ...props }) {
  const { showAuthRatingModal, setShowAuthRatingModal } = useAppState();
  const navigate = useNavigate();

  const modalWindowRef = useRef(null);
  const closeBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  const closeWindow = useCallback(() => {
    setShowAuthRatingModal(false);
  }, [setShowAuthRatingModal]);

  const closeWindowByButtonEsc = useCallback(
    (e) => {
      if (e.keyCode === 27) closeWindow();
    },
    [closeWindow]
  );

  const navigateToLoginPage = useCallback(() => {
    closeWindow();
    navigate("/login");
  }, [navigate, closeWindow]);

  const switchBetweenBtn = useCallback((e) => {
    const currentBtn = e.target;

    if (e.keyCode === 9) {
      e.preventDefault();

      currentBtn === closeBtnRef.current
        ? loginBtnRef.current.focus()
        : closeBtnRef.current.focus();
    }
  }, []);

  if (modalWindowRef && showAuthRatingModal) {
    modalWindowRef.current.focus();
  }

  return (
    <PrimaryModalWindow
      className="auth-rating-modal"
      active={showAuthRatingModal}
      onClick={closeWindow}
      onKeyDown={closeWindowByButtonEsc}
      ref={modalWindowRef}
    >
      <div className="info">
        Можливість оцінюваті фільм мають тільки авторизовані користувачі.
      </div>
      <div className="modal-buttons" onKeyDown={switchBetweenBtn}>
        <PrimaryButton
          className="close-btn"
          onClick={closeWindow}
          ref={closeBtnRef}
        >
          Закрити вікно
        </PrimaryButton>
        <PrimaryButton
          className="login-btn"
          onClick={navigateToLoginPage}
          ref={loginBtnRef}
        >
          Авторизуватись
        </PrimaryButton>
      </div>
    </PrimaryModalWindow>
  );
}

export default AuthRatingModal;
