import React from "react";
import Image from "next/image";
import { RiDeleteBin2Line } from "react-icons/ri";

const Interface = () => {
  return (
    <div className="relative mt-16">
      <span className="mb-28 absolute right-[6%]">Remove / Remove All</span>
      <div className="flex items-center">
        <div className="border w-full flex items-center my-8 px-4 py-4">
          <input type="checkbox" />
          <div className="mx-4 w-full flex items-center">
            <div className="border w-1/4 p-16 mx-4"></div>
            <span className="mx-4 font-semibold">Kuvar</span>
            <span className="mx-4 flex">
              Rok trajanja:
              <span className="font-semibold mx-2">01.06.2022</span>-
              <span className="font-semibold mx-2">01.09.2022</span>
            </span>
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
