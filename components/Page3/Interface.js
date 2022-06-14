import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

const Interface = () => {
  return (
    <div className="relative mt-16">
      <div className="delete_wrapp">
        <button className="mb-28 hover:underline">Remove</button>
        <span className="mb-28 mx-2">/</span>
        <button className="mb-28 hover:underline">Remove All</button>
      </div>
      <div className="flex items-center">
        <div className="border w-full flex items-center my-8 px-4 py-4">
          <input type="checkbox" />
          <div className="mx-4 w-full flex items-center">
            <div className="flex flex-col items-center">
              <div className="border w-1/4 p-16 mx-4"></div>
              <span className="mt-2 font-semibold">Ime poslodavca</span>
            </div>
            <div className="border border-secondary mb-2">
              <p className="text-white p-4">
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
