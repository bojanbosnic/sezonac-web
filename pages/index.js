import Image from "next/image";
import Link from "next/link";
import { ref, set } from "firebase/database";
import { uuidv4 } from "@firebase/util";
import { useState } from "react";
import { db } from "../firebase";
import homepage_pic from "../assets/ilustrations/search_job1.svg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Home({ loggedIn }) {
  const { currentUser } = useContext(AuthContext);
  console.log("TRENUTNO!", currentUser);
  
  return (
    <>
      <div className="container mx-auto sm:px-8">
        <main className="h-screen flex items-center flex-wrap justify-between lg:justify-center   sm:h-screen">
          <div className="text-left  md:my-8">
            <div>
              <h1 className="leading-normal sm:text-4xl">
                Tražiš sezonski posao?
                <span className="block">Tražiš radnike?</span>
              </h1>
              <p className="color-red my-8">
                Onda je ovo pravo mjesto za vas. Potraži ili objavi posao!
              </p>
            </div>
            <div className="flex items-center sm:flex-col">
              {loggedIn ? (
                <Link href="/postthejob">
                  <a>
                    <Button
                      name="Objavi Posao"
                      textColor="color-white"
                      bgColor="bg-blue-500"
                      hover="hover:bg-sky-700"
                      paddingY="py-5 md:py-4"
                      paddingX="px-8"
                    />
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a>
                    <Button
                      name="Objavi Posao"
                      textColor="color-white"
                      bgColor="bg-blue-500"
                      hover="hover:bg-sky-700"
                      paddingY="py-5 md:py-4"
                      paddingX="px-8"
                    />
                  </a>
                </Link>
              )}
              <p className="m-4">ili</p>
              <Link href="/jobs">
                <a>
                  <Button
                    name="Potraži posao"
                    textColor="color-white"
                    bgColor="bg-transparent"
                    hover="hover:bg-sky-700"
                    paddingY="py-5"
                    paddingX="px-8"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="block w-96  md:my-8 sm:hidden">
            <Image
              src={homepage_pic}
              alt="find-job-image"
              className="items-center"
            />
          </div>
        </main>
      </div>
    </>
  );
}
