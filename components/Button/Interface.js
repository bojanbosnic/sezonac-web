import React from "react";
import classnames from "classnames";
import styles from "./button.module.css";

function Button({
  name,
  textColor,
  bgColor,
  hover,
  paddingY,
  paddingX,
  marginRight,
}) {
  return (
    <button
      className={classnames(
        `${bgColor} ${textColor}  ${paddingY} ${paddingX} ${marginRight} font-semibold border-2 rounded-lg text-sm sm:w-full`
      )}
    >
      {name}
    </button>
  );
}

export default Button;
