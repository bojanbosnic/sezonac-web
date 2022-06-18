import React, {useState} from "react";
import Image from "next/image";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import Modal from "../Modal";

const Interface = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative mt-16">
      <div className="flex items-center relative ">
        <div className="mb-44 absolute sm:mb-[5.5rem]">
          <button className="hover:underline">Remove</button>
          <span className="mx-2">/</span>
          <button className="hover:underline">Remove All</button>
        </div>
        <input className="absolute left-[4%]" type="checkbox" />
        <div
          onClick={() => setShowModal(true)}
          className="border w-full flex items-center my-8 p-4 sm:p-0"
        >
          <div className="mx-8 w-full flex items-center justify-between sm:my-2">
            <div className="flex flex-col items-center">
              <div className="border w-24 h-24 mx-8 sm:mx-8 sm:w-12 sm:h-12"></div>
            </div>
            <div className="flex items-center sm:flex-wrap">
              <span className="mx-4 font-semibold">Kuvar</span>
              <div className="flex items-center justify-center">
                <span className="mx-4 flex items-center sm:flex-wrap">
                  <MdLocationOn />
                  <span className="ml-2">Gradiška, Bosna i Hercegovina</span>
                </span>
              </div>
            </div>
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
