import React, { useEffect } from "react";
// import logo from "../../assets/logos/logo.png";
import { auth } from "../../firebase";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Button from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaHome } from "react-icons/fa";

const Interface = ({ toggleFun, toggleValue, loggedIn }) => {
  const { currentUser } = useContext(AuthContext);
  const { displayName } = currentUser;
  const router = useRouter();

  return (
    <nav className="flex bg-transparent justify-between items-center">
      <Link href="/" legacyBehavior>
        sezonac.ba
        {/* <Image src={logo} alt="sezonac-logo" /> */}
      </Link>
      <div className={`${styles.siteNavbar} md:w-full md:min-wi-min`}>
        <ul
          className={classNames(
            `${
              toggleValue && styles.open
            } my-5 flex p-0 items-center list-none text-black md:my-0`
          )}
        >
          <li className="mr-4">
            <Link href="/about">O Nama</Link>
          </li>
          <li className="mr-4">
            <Link href="/contact">Kontakt</Link>
          </li>

          {loggedIn ? (
            <>
              <li className="cursor-pointer md:mr-4">
                <Link href="/profile" legacyBehavior>
                  <a>
                    <FaHome fontSize="1.5rem" />
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="ml-3 md:ml-0 md:mr-4">
                <Link href="/login" legacyBehavior>
                  <a>
                    <Button
                      name="Prijavi se"
                      textColor="text-white"
                      bgColor="bg-primary"
                      hover="hover:bg-sky-700"
                      paddingY="py-3"
                      paddingX="px-5"
                    />
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <button
        className={classNames(
          `${
            toggleValue && styles.togglerOpen
          } border-3 border-white m-3 bg-transparent cursor-pointer h-9  z-30 hidden  md:block `
        )}
        onClick={toggleFun}
      >
        <span
          className={`${styles.spanAnimation} togglerOpen w-7 h-1 bg-[#000] block ease-in-out duration-300`}
        ></span>
      </button>
    </nav>
  );
};

export default Interface;
