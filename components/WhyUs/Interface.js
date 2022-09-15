import { AiOutlineSafety } from "react-icons/ai";
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";

const Interface = () => {
  return (
    <div>
      <h2 className="text-center mb-4 mt-12">Zašto birate nas?</h2>
      <div className="flex justify-between my-8">
        <div className="flex flex-col items-center text-center m-4">
          <span className="text-3xl">
            <AiOutlineSafety />
          </span>
          <h3>Sigurni poslovi</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod. Vestibulum malesuada ante in nisl
            aliquet rutrum.
          </p>
        </div>
        <div className="flex flex-col items-center text-center m-4">
          <span className="text-3xl">
            <FaSearchLocation />
          </span>
          <h3>Brza pretraga</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod. Vestibulum malesuada ante in nisl
            aliquet rutrum.
          </p>
        </div>
        <div className="flex flex-col items-center text-center m-4">
          <span className="text-3xl">
            <MdOutlineLocalOffer />
          </span>
          <h2>Najbolje ponude</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            condimentum gravida euismod. Vestibulum malesuada ante in nisl
            aliquet rutrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interface;
