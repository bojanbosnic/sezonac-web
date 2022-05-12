import React from "react";
import logo from "../../assets/logos/logo.png";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import Button from "../../components/Button";

const Interface = ({ toggleFun, toggleValue }) => {
  return (
    <nav className="flex justify-between items-center text-white border-b-2 border-secondary">
      <Link href="/">
        <Image src={logo} alt="sezonac-logo" />
      </Link>
      <div className="bla">
        <ul className="m-0 flex p-0 items-center list-none">
          <li className="text-secondary mr-4">
            <Link href="#">
              <a>O Nama</a>
            </Link>
          </li>
          <li className="text-secondary mr-4">
            <Link href="#">
              <a>Kontakt</a>
            </Link>
          </li>
          <li>
            <div className="block border-l-2 border-secondary h-8 mx-2"></div>
          </li>
          <li>
            <Link href="#">
              <a>
                <Button
                  name="Prijavi se"
                  textColor="color-white"
                  bgColor="bg-transparent"
                  hover="hover:bg-sky-700"
                  paddingY="py-4"
                  paddingX="px-6"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>ili se registruj</a>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={classNames(
          `${
            toggleValue && `bg-transparent`
          }}  border-3 border-white m-3 bg-transparent cursor-pointer h-9 hidden z-10 tablet:block`
        )}
        onClick={toggleFun}
      >
        <span className="before:content-[''] before:w-7 before:h-1 before:bg-white  before:-translate-y-3.5 after:content-[''] after:translate-y-3 w-7 h-1 bg-white block ease-in-out duration-300 "></span>
      </button>
    </nav>
  );
};

export default Interface;
