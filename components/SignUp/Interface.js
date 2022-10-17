import React from "react";
import Link from "next/link";

const Interface = ({
  vrednost,
  placeHolder,
  name,
  funkcija,
  type,
  id,
  icon,
}) => {
  return (
    <form className="w-2/4 text-white md:w-full">
      <div className="my-4">
        <label htmlFor={id} className="font-medium text-black">
          {name}
        </label>
        <div className="relative">
          <input
            id={id}
            onChange={funkcija}
            value={vrednost}
            className="input_field_login relative pl-10 z-10"
            type={type}
            placeholder={placeHolder}
          />
          <label htmlFor={id}>{icon}</label>
        </div>
      </div>
    </form>
  );
};

export default Interface;
