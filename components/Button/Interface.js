import React from "react";
import classnames from "classnames";

function Button({
  name,
  textColor,
  bgColor,
  hover,
  paddingY,
  paddingX,
  marginRight,
  icon,
}) {
  return (
    <button
      className={classnames(
        `${bgColor} ${textColor} ${paddingY} ${paddingX} ${marginRight} flex items-center font-medium border-2 rounded-lg text-sm sm:w-full`
      )}
    >
      {icon}
      {name}
    </button>
  );
}

export default Button;
