import React from "react";

const Interface = ({ jobName, placeHolder, inputType, handleJobFun }) => {
  return (
    <form>
      <label>{jobName}</label>
      <input
        className="input_field_login"
        type={inputType}
        placeholder={placeHolder}
        onChange={handleJobFun}
      />
    </form>
  );
};

export default Interface;
