import React from "react";

const PostJobInput = ({
  jobName,
  placeHolder,
  inputType,
  icon,
  name,
  error,
  rules,
  register,
}) => {
  console.log("errori", error);

  // error = '' - false
  // error = 'Email nije dobar.'  - true

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

      {error && (
        <p className="text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default PostJobInput;
