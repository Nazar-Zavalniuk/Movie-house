import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { HiClipboardCopy, HiClipboardCheck } from "react-icons/hi";
import classNames from "classnames";

function CopyButton({ className, data, buttonSize = 20, ...props }) {
  const classNameBtn = classNames("copy-btn", className);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(data).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <PrimaryButton className={classNameBtn} onClick={handleCopyClick}>
      {isCopied ? (
        <HiClipboardCheck title="Скопійовано" size={buttonSize} />
      ) : (
        <HiClipboardCopy title="Скопіювати" size={buttonSize} />
      )}
    </PrimaryButton>
  );
}

export default CopyButton;
