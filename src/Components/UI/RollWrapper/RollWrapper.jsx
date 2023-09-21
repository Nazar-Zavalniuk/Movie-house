import React, { useState, useRef, useEffect } from "react";
import "./RollWrapper.css";
import classNames from "classnames";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function RollWrapper({
  children,
  className,
  collapsedVisibleRowsCount = 1,
  buttonSize = 12,
  ...props
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(null);
  const [clientHeight, setClientHeight] = useState(null);
  const contentRef = useRef(null);

  const classNameWrapper = classNames("roll-wrapper", className);
  const classNameBlock = classNames("expanding-block", className);
  const classNameBtn = classNames("expand-btn", className);

  const toggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  useEffect(() => {
    setScrollHeight(contentRef.current.scrollHeight);
    setClientHeight(contentRef.current.clientHeight);
    setIsExpanded(false);
  }, []);

  return (
    <div className={classNameWrapper}>
      <div
        className={classNameBlock}
        ref={contentRef}
        style={{
          height: isExpanded ? `${scrollHeight}px` : `${clientHeight}px`,
          WebkitLineClamp: isExpanded
            ? "unset"
            : `${collapsedVisibleRowsCount}`,
        }}
      >
        {children}
      </div>
      {contentRef && scrollHeight > clientHeight && (
        <PrimaryButton className={classNameBtn} onClick={toggleExpand}>
          {isExpanded ? (
            <FaChevronUp size={buttonSize} />
          ) : (
            <FaChevronDown size={buttonSize} />
          )}
        </PrimaryButton>
      )}
    </div>
  );
}

export default RollWrapper;
