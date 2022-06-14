import React from "react";
import Image from "next/image";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

const Interface = () => {
  return (
    <div className="relative mt-16">
      <div className="delete_wrapp">
        <button className="mb-28 hover:underline">Delete</button>
        <span className="mb-28 mx-2">/</span>
        <button className="mb-28 hover:underline">Delete All</button>
      </div>
      <div className="flex items-center">
        <div className="border w-full flex items-center my-8 px-4 py-4">
          <input type="checkbox" />
          <div className="mx-4 w-full flex items-center justify-between sm:flex-wrap">
            <div className="flex flex-col items-center">
              <div className="border w-1/4 p-16 mx-4"></div>
              <span className="mt-2">Ime poslodavca</span>
            </div>
            <span className="mx-4 font-semibold">Kuvar</span>
            <div>
              <span className="mx-4 flex items-center sm:flex-wrap">
                <MdLocationOn />
                <span className="ml-2">Gradiška, Bosna i Hercegovina</span>
              </span>
            </div>
          </div>
        </div>
        <button className="ml-4">
          <RiDeleteBin2Line fontSize="2rem" />
        </button>
      </div>
    </div>
  );
};

export default Interface;
