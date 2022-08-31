import React from "react";

const Interface = ({ name, placeHolder, handleFunction }) => {
  return (
    <div>
      <div className="my-8">
        <h2>{name}</h2>
        <input
          className="input_field_registration"
          type="text"
          placeholder={placeHolder}
          onChange={handleFunction}
        />
      </div>
    </div>
  );
};

export default Interface;
