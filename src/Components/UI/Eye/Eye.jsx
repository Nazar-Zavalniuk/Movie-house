import React, { Fragment } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Eye({ className, open = false, eyeSize = 16, tabIndex, ...props }) {
  return (
    <Fragment>
      {open ? (
        <div
          {...props}
          className={className}
          title="Приховати"
          tabIndex={tabIndex}
        >
          <AiOutlineEye size={eyeSize} />
        </div>
      ) : (
        <div
          {...props}
          className={className}
          title="Показати"
          tabIndex={tabIndex}
        >
          <AiOutlineEyeInvisible size={eyeSize} />
        </div>
      )}
    </Fragment>
  );
}

export default Eye;
