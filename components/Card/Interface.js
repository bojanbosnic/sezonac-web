import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export default function Card(props) {
    const {job} = props;
  return (
    <>
      <div className="card my-12">
        <div className="flex items-center absolute right-[3%] top-[5%]">
          <button className="card_save and msg">
            <AiOutlineMail className="text-2xl" />
          </button>
          <button className="ml-2">
            <BsFillBookmarkFill className="text-xl" />
          </button>
        </div>
        <div className="card-title">
          <h2>{job}</h2>
        </div>
        <div className="subtitle">ime_poslodavca</div>
        <div className="flex  my-4 items-center">
          <div>datum trajanja</div>
          <div className="ml-8">01.06.2022-01.09.2022</div>
        </div>
        <div className="flex items-center my-4">
          <div>
            <MdLocationOn />
          </div>
          <div className="ml-2">
            Gradiška, Republika Srpska, Bosna i hercegovina
          </div>
        </div>
        <div className="border-2 border-red-700 rounded-lg p-4 my-4">
          <p>
            Trenutno tražimo konobara sa ili bez radnog iskustva koji bi radio 8
            sati. Za ostale informacije obratite nam se na jedan od kontakata
            ispod.
          </p>
        </div>
        <div className="flex justify-between flex-wrap items-center">
          <div className="border-2 border-red-700 rounded-lg p-2 my-4 lg:w-full lg:text-center">
            telefon: 065567987
          </div>
          <div className="border-2 border-red-700 rounded-lg p-2 my-4  lg:w-full lg:text-center ">
            satnica: 5km
          </div>
          <div className="border-2 border-red-700 rounded-lg p-2 my-4   lg:w-full lg:text-center">
            email: imekorisnika@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}
