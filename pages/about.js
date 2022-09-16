import React from "react";
import Image from "next/image";
import about_image2 from "../assets/ilustrations/pic2.png";
import WhyUs from "../components/WhyUs";
import { GoPrimitiveDot } from "react-icons/go";

export default function AboutUs() {
  return (
    <div className="container">
      <main className=" text-black">
        <div>
          <h1 className="text-center">Naši benefiti</h1>
        </div>
        <div className="flex  justify-around flex-row items-center">
          <div className="flex flex-col w-1/4  lg:w-full">
            <div className="flex items-center">
              <GoPrimitiveDot color="green" />
              <h3>Naslov 1</h3>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum. Fusce tincidunt dolor nunc, vehicula pretium nibh
              tempus non.
            </p>
            <div className="flex items-center">
              <GoPrimitiveDot color="green" />
              <h3>Naslov 2</h3>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum. Fusce tincidunt dolor nunc, vehicula pretium nibh
              tempus non. Vestibulum id placerat lorem. In vehicula sed lacus
            </p>
          </div>
          <div className="flex flex-row w-96 my-6 mx-4 lg:justify-center lg:order-2 md:w-full">
            <Image src={about_image2} alt="about-me-pic" />
          </div>
          <div className="flex flex-col w-1/4 lg:w-full  lg:order-1">
            <div className="flex items-center">
              <GoPrimitiveDot color="green" />
              <h3>Naslov 3</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum. Fusce tincidunt dolor nunc, vehicula pretium nibh
              tempus non.
            </p>
            <div className="flex items-center">
              <GoPrimitiveDot color="green" />
              <h3>Naslov 4</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum.
            </p>
          </div>
        </div>
        <WhyUs />
      </main>
    </div>
  );
}
