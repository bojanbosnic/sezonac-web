import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import about_image2 from "../assets/ilustrations/pic1.png";
import WhyUs from "../components/WhyUs";

export default function AboutUs() {
  return (
    <div className="container">
      <Navbar />
      <main className=" text-black">
        <div>
          <h1 className="text-center">Naši benefiti</h1>
        </div>
        <div className="flex  justify-around flex-row items-center">
          <div className="flex flex-col w-1/2 text-center lg:w-full">
            <h3>Naslov 1</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum. Fusce tincidunt dolor nunc, vehicula pretium nibh
              tempus non. Vestibulum id placerat lorem. In vehicula sed lacus
              vitae pulvinar. Sed sit amet sodales dolor.
            </p>
            <h3>Naslov 2</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum. Fusce tincidunt dolor nunc, vehicula pretium nibh
              tempus non. Vestibulum id placerat lorem. In vehicula sed lacus
              vitae pulvinar. Sed sit amet sodales dolor.
            </p>
          </div>
          <div className="flex flex-row w-96 my-6 mx-4 lg:justify-center lg:order-2 md:w-full">
            <Image src={about_image2} alt="about-me-pic" />
          </div>
          <div className="flex flex-col w-1/2 lg:w-full text-center lg:order-1">
            <h3>Naslov 11</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum. Fusce tincidunt dolor nunc, vehicula pretium nibh
              tempus non. Vestibulum id placerat lorem. In vehicula sed lacus
              vitae pulvinar. Sed sit amet sodales dolor.
            </p>
            <h3>Naslov 22</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              condimentum gravida euismod. Vestibulum malesuada ante in nisl
              aliquet rutrum. Fusce tincidunt dolor nunc, vehicula pretium nibh
              tempus non. Vestibulum id placerat lorem. In vehicula sed lacus
              vitae pulvinar. Sed sit amet sodales dolor.
            </p>
          </div>
        </div>
        <WhyUs />
      </main>
    </div>
  );
}
