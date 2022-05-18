import React from "react";
import classnames from 'classnames';

function Button({ name, bgColor, textColor, hover, paddingY, paddingX }) {
  return (
    <button
      className={classnames(
        `${bgColor} ${textColor} ${hover} ${paddingY} ${paddingX} font-bold  rounded border-2 sm:w-full`
      )}
    >
      {name}
    </button>
  );
};

export default Button;
