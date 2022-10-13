import React from "react";
import Image from "next/image";
import WhyUs from "../components/WhyUs";
import { BsCheckCircleFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
const token =
  typeof window !== "undefined" ? localStorage.getItem("Token") : null;

export default function AboutUs() {
  return (
    <div className="container">
      <Navbar loggedIn={!!token} />
      <main className="flex items-center justify-between grid grid-cols-2 gap-4 lg:grid-cols-1 lg:flex-wrap">
        <div className="	lg:w-full">
          <div>
            <h1 className="text-[2.5rem]">Naši benefiti</h1>
          </div>
          <ul className="text-2xl">
            <li className="flex items-center my-4">
              <BsCheckCircleFill fontSize="1rem" className="mr-2 text-primary" /> Povjerenje &
              Kvalitetan Posao
            </li>
            <li className="flex items-center my-4">
              <BsCheckCircleFill fontSize="1rem" className="mr-2 text-primary" />
              Internacionalni Posao
            </li>
            <li className="flex items-center my-4">
              <BsCheckCircleFill fontSize="1rem" className="mr-2 text-primary" /> Top Kompanije
            </li>
            <li className="flex items-center my-4">
              <BsCheckCircleFill fontSize="1rem" className="mr-2 text-primary" /> Bez Dodatne
              Naknade
            </li>
          </ul>
        </div>
        <div className=" lg:w-full">
          <WhyUs />
        </div>
      </main>
    </div>
  );
}
