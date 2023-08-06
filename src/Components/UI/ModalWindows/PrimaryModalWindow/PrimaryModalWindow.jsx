import React, { forwardRef, useCallback, useEffect } from "react";
import "./PrimaryModalWindow.css";
import classNames from "classnames";

const PrimaryModalWindow = forwardRef(
  ({ className, children, active, ...props }, ref) => {
    const classNameBlock = classNames("modal", className, { active });
    const classNameBody = classNames("modal-body", className, { active });

    // Ensure that the click event is intercepted and not propagated from the modal's body to the
    // outer block. This precaution is necessary because the click event will likely be bound to the
    // outer block, enabling the user to close the modal by clicking anywhere outside the modal's body.
    const stopPropagation = useCallback((e) => {
      e.stopPropagation();
    }, []);

    useEffect(() => {
      const appWrapper = document.querySelector("#root");
      const appWrapperDefaultPadding = 15;

      const scrollbarWidth = window.innerWidth - appWrapper.offsetWidth;

      // Add or remove the 'no-scroll' class from the body element based on the modal state
      if (active) {
        appWrapper.style.paddingRight =
          scrollbarWidth + appWrapperDefaultPadding + "px";
        document.body.classList.add("no-scroll");
      } else {
        appWrapper.style = "";
        document.body.classList.remove("no-scroll");
      }

      // Clean up the effect when the component unmounts
      return () => {
        appWrapper.style = "";
        document.body.classList.remove("no-scroll");
      };
    }, [active]);

    return (
      <div {...props} className={classNameBlock} ref={ref} tabIndex={-1}>
        <div className={classNameBody} onClick={stopPropagation}>
          {children}
        </div>
      </div>
    );
  }
);

export default PrimaryModalWindow;
