import React, { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import Modal from "../Modal";

const Interface = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative mt-16">
      <div className="delete_wrapp">
        <button className="mb-28 hover:underline">Delete</button>
        <span className="mb-28 mx-2">/</span>
        <button className="mb-28 hover:underline">Delete All</button>
      </div>
      <div className="flex items-center relative">
        <input className="absolute left-[3%]" type="checkbox" />
        <div
          onClick={() => setShowModal(true)}
          className="border w-full flex items-center  my-8 px-4 py-4"
        >
          <div className="w-full flex mx-4 items-center justify-between sm:flex-wrap">
            <span className="mx-4 font-semibold">Konobar</span>
            <span className="mx-4 flex items-center sm:flex-wrap">
              Rok trajanja:
              <span className="font-semibold mx-2">01.06.2022</span>-
              <span className="font-semibold mx-2">01.09.2022</span>
            </span>
          </div>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)} />
        <button className="ml-4">
          <RiDeleteBin2Line fontSize="2rem" />
        </button>
      </div>
    </div>
  );
};

export default Interface;
