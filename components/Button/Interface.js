import React from "react";
import classnames from "classnames";

function Button({ name, bgColor, textColor, hover, paddingY, paddingX }) {
  return (
    <button
      className={classnames(
        `${bgColor} ${textColor} ${hover} ${paddingY} ${paddingX} font-semibold border-2 text-sm sm:w-full`
      )}
    >
      {name}
    </button>
  );
}

export default Button;
