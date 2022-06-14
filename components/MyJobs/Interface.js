import Link from "next/link";
import React from "react";

const Interface = ({ setPage, myPages }) => {
  return (
    <div>
      
      <nav className="flex justify-between items-center  border-b-2 border-secondary  text-white">
        <ul className="my-5 flex p-0 items-center list-none md:my-0">
          <li
            className="text-white mr-8 cursor-pointer "
            onClick={() => setPage("page1")}
          >
            Moji poslovi
          </li>
          <li
            className="text-white mr-8 cursor-pointer"
            onClick={() => setPage("page2")}
          >
            Sačuvani Poslovi
          </li>
          <li
            className="text-white mr-8 cursor-pointer"
            onClick={() => setPage("page3")}
          >
            Inbox
          </li>
        </ul>
        <button>Objavi Posao</button>
      </nav>
      <div>{myPages()}</div>
    </div>
  );
};

export default Interface;
