import React from "react";
import "./ChangePasswordLoader.css";
import Loader from "../Loader/Loader";
import classNames from "classnames";

function ChangePasswordLoader({ visible, ...props }) {
  const classNameBlock = classNames("change-password-loader", { visible });

  return (
    <div className={classNameBlock}>
      <Loader size="normal" />
    </div>
  );
}

export default ChangePasswordLoader;
