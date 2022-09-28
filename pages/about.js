import React from "react";
import Image from "next/image";
import WhyUs from "../components/WhyUs";
import { BsCheckCircleFill } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div className="container">
      <main className="flex items-center justify-between lg:flex-wrap">
        <div className="w-1/2 grow-0 shrink-0	basis-auto	lg:w-full">
          <div>
            <h1 className="text-[2.5rem]">Naši benefiti</h1>
          </div>
          <ul className="text-2xl">
            <li className="flex items-center my-4">
              <BsCheckCircleFill className="mr-2 text-primary" /> Povjerenje &
              Kvalitetan Posao
            </li>
            <li className="flex items-center my-4">
              <BsCheckCircleFill className="mr-2 text-primary" />
              Internacionalni Posao
            </li>
            <li className="flex items-center my-4">
              <BsCheckCircleFill className="mr-2 text-primary" /> Top Kompanije
            </li>
            <li className="flex items-center my-4">
              <BsCheckCircleFill className="mr-2 text-primary" /> Bez Dodatne
              Naknade
            </li>
          </ul>
        </div>
        {/* <div className="flex  justify-around flex-row items-center">
          <div className="flex flex-col w-1/4  lg:w-full"></div>
          <div className="flex flex-col w-1/4 lg:w-full  lg:order-1"></div>
        </div> */}
        <div className="w-1/2 grow-0 shrink-0	basis-auto lg:w-full">
          <WhyUs />
        </div>
      </main>
    </div>
  );
}
