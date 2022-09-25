import Image from "next/image";
import icon1 from "../../assets/ilustrations/icon1.png";
import icon2 from "../../assets/ilustrations/icon2.png";
import icon3 from "../../assets/ilustrations/icon3.png";

const Interface = () => {
  return (
    <div className="flex justify-between flex-wrap my-8 md:flex-wrap">
      <div className="flex justify-between md:flex-wrap">
        <div className="card shadow-sm shadow-[#7cb5ea] flex flex-col ml-20 items-center text-center m-4 bg-[#7cb5ea]  p-4 rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[33px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon1} alt="icon1" />
          </div>
          <span className="text-3xl text-[#3898e2]">01</span>
          <h4>Sigurni poslovi</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
        <div className="card shadow-sm shadow-[#eac87c] flex flex-col ml-20 items-center text-center m-4 bg-[#eac87c]  p-4 rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[33px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon2} alt="icon2" />
          </div>
          <span className="text-3xl text-[#e2b438]">02</span>
          <h4>Brza pretraga</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
      </div>
      <div className="flex justify-between md:flex-wrap">
        <div className="card shadow-sm shadow-[#cea7d9] flex flex-col ml-20 items-center text-center m-4 bg-[#cea7d9]  p-4 rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[33px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon3} alt="icon3" />
          </div>
          <span className="text-3xl text-[#bc84ca]">03</span>
          <h4>Najbolje ponude</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
        <div className="card shadow-sm shadow-[#8be3c6] flex flex-col ml-20 items-center text-center m-4 bg-[#8be3c6] p-4 rounded-3xl md:w-full">
          <div className="absolute left-[-50px] top-[33px] w-[90px] h-[95px] bg-white flex items-center justify-center rounded-lg shadow-sm shadow-[#7cb5ea]">
            <Image src={icon3} alt="icon3" />
          </div>
          <span className="text-3xl text-[#56d8b1]">04</span>
          <h4>Najbolje ponude</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interface;
