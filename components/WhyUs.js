import Image from "next/image";
import icon1 from "../assets/ilustrations/icon1.png";
import icon2 from "../assets/ilustrations/icon2.png";
import icon3 from "../assets/ilustrations/icon3.png";

const WhyUs = () => {
  return (
    <div className="flex justify-between flex-wrap my-8 md:flex-wrap">
      <div className="flex justify-between md:flex-wrap">
        <div className="card shadow-sm shadow-[#7cb5ea]  mb-10 p-6 text-center  mt-[30px] bg-[#7cb5ea]  p-4 rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[30px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon1} alt="icon1" />
          </div>
          <span className="text-3xl text-[#3898e2]">01</span>
          <h4 className="px-8">Sigurni poslovi</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="card shadow-sm shadow-[#eac87c] p-6 mb-10 ml-[80px] mt-[30px] md:ml-0 items-center text-center bg-[#eac87c]  rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[30px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon2} alt="icon2" />
          </div>
          <span className="text-3xl text-[#e2b438]">02</span>
          <h4 className="px-8">Brza pretraga </h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex justify-between md:flex-wrap">
        <div className="card shadow-sm shadow-[#cea7d9] p-6 mb-10 items-center mt-[30px] text-center bg-[#cea7d9]  rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[30px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon3} alt="icon3" />
          </div>
          <span className="text-3xl text-[#bc84ca]">03</span>
          <h4 className="px-8">Najbolje ponude </h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="card shadow-sm shadow-[#8be3c6] ml-[80px] mt-[30px] mb-10 ml-20 md:ml-0 items-center text-center bg-[#8be3c6] rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[30px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon3} alt="icon3" />
          </div>
          <span className="text-3xl text-[#56d8b1]">04</span>
          <h4 className="px-8">Brzi Odgovori</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
