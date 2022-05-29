import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import about_image1 from "../assets/ilustrations/draw2.svg";
import about_image2 from "../assets/ilustrations/draw5.svg";
export default function AboutUs() {
  return (
    <div className="container">
      <Navbar />
      <main className=" text-white">
        <div>
          <h1>Hajde da se bolje upoznamo</h1>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-1/2 lg:w-full">
            <h3>
              Mi smo biznis agencija koja je došla na ideju da otovori web sajt
              za vlastiti biznis odnosno objavljivanje raznih poslova koji su
              traženi ili potragu istih u nedostatku trenutnog posla.
            </h3>
          </div>
          <div className="w-96 my-6 lg:justify-center md:w-full ">
            <Image src={about_image1} alt="about-me-pic" />
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-96 my-6 lg:justify-center lg:order-2 md:w-full">
            <Image src={about_image2} alt="about-me-pic" />
          </div>
          <div className="w-1/2 lg:w-full lg:order-1">
            <h3>
              Na našem sajtu možete da pronađete razne sezonske poslove koji su
              dostupni u našem regionu. Naš sajt omogućava brzu i laku upotrebu
              bez puno komplikovanja.
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
