import React from "react";
import Link from 'next/link';

const Interface = ({ vrednost, placeHolder, name, funkcija, type }) => {
 
  return (
    <form className="w-2/4 text-white md:w-full">
      <div className="my-12">
        <label htmlFor="name_id">{name}</label>
        <div>
          <input
            onChange={funkcija}
            value={vrednost}
            className="input_field_registration"
            type={type}
            placeholder={placeHolder}
          />
        </div>
      </div>
    </form>
  );
};

export default Interface;
