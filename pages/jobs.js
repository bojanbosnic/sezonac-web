import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card/Interface";
import { AiOutlineSearch } from "react-icons/ai";


export default function Jobs() {
  return (
    <div className="container sm:p-4">
     
      <main>
        <div className="flex justify-center my-12"> 
          <div className="w-1/2 relative lg:w-full">
            <input
              className="input_field_login border-white z-20 relative pl-12 "
              type="text"
              placeholder="Potraži posao"
            />
            <AiOutlineSearch className="absolute text-xl z-10 top-[30px] left-3" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <Card job="Konobar" />
          <Card job="Kuvar" />
        </div>
      </main>
    </div>
  );
}
