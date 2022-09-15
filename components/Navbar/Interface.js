import React from "react";
// import logo from "../../assets/logos/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Button from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Interface = ({ toggleFun, toggleValue, loggedIn }) => {
  const { currentUser } = useContext(AuthContext);
  const { displayName } = currentUser;
  const router = useRouter();

  const handleLogOut = async (e) => {
    try {
      localStorage.removeItem("Token");
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto sm:px-8">
      <nav className="flex justify-between items-center">
        <Link href="/">
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
            <li className=" mr-4">
              <Link href="/about">
                <a>O Nama</a>
              </Link>
            </li>
            <li className=" mr-4">
              <Link href="/contact">
                <a>Kontakt</a>
              </Link>
            </li>

            {loggedIn ? (
              <>
                <li style={{ margin: "1rem" }}>
                  <Link href="/profile">
                    <a>{displayName}</a>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li className="mx-3">
                  <Link href="/login">
                    <a>
                      <Button
                        name="Prijavi se"
                        textColor="color-white"
                        bgColor="bg-primary"
                        hover="hover:bg-sky-700"
                        paddingY="py-3"
                        paddingX="px-5"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a>ili se registruj</a>
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
            } border-3 border-white m-3 bg-transparent cursor-pointer h-9  z-10 hidden  md:block `
          )}
          onClick={toggleFun}
        >
          <span
            className={`${styles.spanAnimation} togglerOpen w-7 h-1 bg-white block ease-in-out duration-300`}
          ></span>
        </button>
      </nav>
    </div>
  );
};

export default Interface;
