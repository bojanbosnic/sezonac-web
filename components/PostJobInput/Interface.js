import React from "react";

const Interface = ({
  jobName,
  placeHolder,
  inputType,
  icon,
  name,
  error,
  rules,
  register,
}) => {
  return (
    <div>
      <label>{jobName}</label>
      <div className="relative">
        <input
          className="input_field_login relative pl-8 z-10"
          type={inputType}
          placeholder={placeHolder}
          {...register(`${name}`, rules)}
        />
        {icon}
      </div>
      {/* {error.email?.type === "required"  && (
        <p className="text-red-600" role="alert">
          {error.message}
        </p>
      )} */}
    </div>
  );
};

export default Interface;
