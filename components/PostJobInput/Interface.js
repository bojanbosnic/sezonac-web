import React from "react";

const Interface = ({ jobName, placeHolder, inputType, handleJobFun, icon }) => {
  return (
    <form>
      <label>{jobName}</label>
      <div className="relative">
        <input
          className="input_field_login relative pl-8 z-10"
          type={inputType}
          placeholder={placeHolder}
          onChange={handleJobFun}
        />
        {icon}
      </div>
    </form>
  );
};

export default Interface;
