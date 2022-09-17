import React from "react";
import Image from "next/image";
import about_image2 from "../assets/ilustrations/pic2.png";
import WhyUs from "../components/WhyUs";
import { BsCheckCircleFill } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div className="container">
      <main className="flex">
        <div>
          <div>
            <h1>Naši benefiti</h1>
          </div>
          <ul>
            <li className="flex items-center">
              <BsCheckCircleFill className="mr-2 text-primary" /> Povjerenje &
              Kvalitetan Posao
            </li>
            <li className="flex items-center">
              <BsCheckCircleFill className="mr-2 text-primary" />
              Internacionalni Posao
            </li>
            <li className="flex items-center">
              <BsCheckCircleFill className="mr-2 text-primary" /> Top Kompanije
            </li>
            <li className="flex items-center">
              <BsCheckCircleFill className="mr-2 text-primary" /> Bez Dodatne
              Naknade
            </li>
          </ul>
        </div>
        {/* <div className="flex  justify-around flex-row items-center">
          <div className="flex flex-col w-1/4  lg:w-full"></div>
          <div className="flex flex-col w-1/4 lg:w-full  lg:order-1"></div>
        </div> */}
        <WhyUs />
      </main>
    </div>
  );
}
