import { AiOutlineSafety } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { MdOutlineLocalOffer } from "react-icons/md";

const Interface = () => {
  return (
    <div className="flex justify-between flex-wrap my-8 md:flex-wrap">
      <div className="flex">
        <div className="card shadow-sm shadow-[#7cb5ea] flex flex-col items-center text-center m-4 bg-[#7cb5ea]  p-4 rounded-3xl md:w-full">
          <span className="text-3xl text-[#3898e2]">01</span>
          <h4>Sigurni poslovi</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
        <div className="card shadow-sm shadow-[#eac87c] flex flex-col items-center text-center m-4 bg-[#eac87c]  p-4 rounded-3xl md:w-full">
          <span className="text-3xl text-[#e2b438]">02</span>
          <h3>Brza pretraga</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="card shadow-sm shadow-[#cea7d9] flex flex-col items-center text-center m-4 bg-[#cea7d9]  p-4 rounded-3xl md:w-full">
          <span className="text-3xl text-[#bc84ca]">03</span>
          <h2>Najbolje ponude</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
        <div className="card shadow-sm shadow-[#8be3c6] flex flex-col items-center text-center m-4 bg-[#8be3c6] p-4 rounded-3xl md:w-full">
          <span className="text-3xl text-[#56d8b1]">04</span>
          <h2>Najbolje ponude</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interface;
