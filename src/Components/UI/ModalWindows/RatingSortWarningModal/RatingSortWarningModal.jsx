import React, { useCallback, useRef } from "react";
import "./RatingSortWarningModal.css";
import PrimaryModalWindow from "../PrimaryModalWindow/PrimaryModalWindow";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { useAppState } from "../../../../Context/AppStateProvider/AppStateProvider";

function RatingSortWarningModal({ children, ...props }) {
  const { showRatingSortWarning, setShowRatingSortWarning } = useAppState();

  const modalWindowRef = useRef(null);
  const closeBtnRef = useRef(null);

  const closeWindow = useCallback(() => {
    setShowRatingSortWarning(false);
  }, [setShowRatingSortWarning]);

  const closeWindowByPressEnter = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        closeWindow();
      }
    },
    [closeWindow]
  );

  const keyboardModalControl = useCallback(
    (e) => {
      if (e.keyCode === 27) closeWindow();
      if (e.keyCode === 9) {
        document.activeElement !== closeBtnRef.current
          ? closeBtnRef.current.focus()
          : modalWindowRef.current.focus();
      }
      e.preventDefault();
    },
    [closeWindow]
  );

  if (modalWindowRef && showRatingSortWarning) {
    modalWindowRef.current.focus();
  }

  return (
    <PrimaryModalWindow
      className="rating-sort-warning-modal"
      active={showRatingSortWarning}
      onClick={closeWindow}
      onKeyDown={keyboardModalControl}
      ref={modalWindowRef}
    >
      <div className="info">{children}</div>
      <PrimaryButton
        className="close-btn"
        onClick={closeWindow}
        onKeyDown={closeWindowByPressEnter}
        ref={closeBtnRef}
      >
        Зрозуміло
      </PrimaryButton>
    </PrimaryModalWindow>
  );
}

export default RatingSortWarningModal;
