import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

const Interface = () => {
  return (
    <div className="relative mt-16">
      <span className="mb-28 absolute right-[6%]">Remove / Remove All</span>
      <div className="flex items-center">
        <div className="border w-full flex items-center my-8 px-4 py-4">
          <input type="checkbox" />
          <div className="mx-4 w-full flex items-center">
            <div>
              <div className="border w-1/4 p-16 mx-4"></div>
              <span className="mx-4 font-semibold">Ime poslodavca</span>
            </div>
            <div className="bg-white">
              <p className="text-black">
                Pozdrav, zainteresovan sam za posao kuvara ali me zanimaju jos
                neke dodatne informacije molimo da se javite na ovaj broj 076
                789 986
              </p>
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
