import React from "react";
import logo from "../../assets/logos/logo.png";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./styles.module.css";
import Button from "../../components/Button";

const Interface = ({ toggleFun, toggleValue }) => {
  return (
    <nav className="flex justify-between items-center text-white border-b-2 border-secondary">
      <Link href="/">
        <Image src={logo} alt="sezonac-logo" />
      </Link>
      <div className={`${styles.siteNavbar} md:w-full md:min-wi-min`}>
        <ul
          className={classNames(
            `${
              toggleValue && styles.open
            } my-5 flex p-0 items-center list-none md:my-0`
          )}
        >
          <li className="text-white mr-4">
            <Link href="#">
              <a>O Nama</a>
            </Link>
          </li>
          <li className="text-white mr-4">
            <Link href="#">
              <a>Kontakt</a>
            </Link>
          </li>
          <li>
            <div className="block border-l-2 border-secondary h-8 mx-2 md:border-r-0 md:border-t-1 md:border-secondary md:h-0 md:m-r-0"></div>
          </li>
          <li className="mx-3">
            <Link href="#">
              <a>
                <Button
                  name="Prijavi se"
                  textColor="color-white"
                  bgColor="bg-transparent"
                  hover="hover:bg-sky-700"
                  paddingY="py-3"
                  paddingX="px-5"
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
            toggleValue && styles.togglerOpen
          } border-3 border-white m-3 bg-transparent cursor-pointer h-9  z-10 hidden  md:block `
        )}
        onClick={toggleFun}
      >
        <span className={`${styles.spanAnimation} togglerOpen w-7 h-1 bg-white block ease-in-out duration-300`}></span>
      </button>
    </nav>
  );
};

export default Interface;
