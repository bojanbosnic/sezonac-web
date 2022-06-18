import React, { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import Modal from "../Modal";

const Interface = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative mt-16">
      <div className="flex items-center relative">
        <div className="mb-32  absolute sm:mb-[8rem]">
          <button className="hover:underline">Delete</button>
          <span className="mx-2">/</span>
          <button className="hover:underline">Delete All</button>
        </div>
        <input className="absolute left-[3%]" type="checkbox" />
        <div
          onClick={() => setShowModal(true)}
          className="border w-full flex items-center my-8 px-4 sm:p-0"
        >
          <div className="w-full flex m-8 items-center justify-between sm:flex-wrap sm:m-4 sm:px-4">
            <span className="mx-4 font-semibold">Konobar</span>
            <span className="mx-4 flex items-center sm:flex-wrap">
              <span className="bassis-full">Trajanje:</span>
              <span className="font-semibold mx-2">01.06.2022</span>-
              <span className="font-semibold mx-2">01.09.2022</span>
            </span>
          </div>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)} />
        <button className="ml-4 sm:hidden">
          <RiDeleteBin2Line fontSize="2rem" />
        </button>
      </div>
    </div>
  );
};

export default Interface;
