import Link from "next/link";
import React from "react";

const Interface = ({ setPage, myPages }) => {
  return (
    <div>
      <nav className="flex justify-between items-center border-secondary  text-white ">
        <ul className="my-5 flex p-0 items-center list-none md:my-0 sm:flex-wrap">
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
          <li className="mr-8">
            <Link href="/postthejob">
              <a>Objavi Posao</a>
            </Link>
          </li>
          <li>
            <Link href="/jobs">
              <a>Potraži posao</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>{myPages()}</div>
    </div>
  );
};

export default Interface;
