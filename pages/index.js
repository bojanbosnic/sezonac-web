import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import homepage_pic from "../assets/ilustrations/search_job1.svg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Sezonac</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto sm:px-8">
        <Navbar/>
        <main className="h-screen flex items-center flex-wrap	justify-between lg:justify-center sm:w-full">
          <div className="text-left">
            <div>
              <h1 className="text-5xl font-bold leading-normal sm:text-4xl">
                Tražiš sezonski posao?
                <span className="block">Tražiš radnike?</span>
              </h1>
              <p className="color-red my-8">
                Onda je ovo pravo mjesto za vas. Potraži ili objavi posao!
              </p>
            </div>
            <div className="flex items-center sm:flex-col">
              <Button
                name="Objavi Posao"
                textColor="color-white"
                bgColor="bg-blue-500"
                hover="hover:bg-sky-700"
                paddingY="py-5 sm:py-4"
                paddingX="px-8"
              />
              <p className="m-4">
                ili
              </p>
              <Button
                name="Potraži posao"
                textColor="color-white"
                bgColor="bg-transparent"
                hover="hover:bg-sky-700"
                paddingY="py-5"
                paddingX="px-8"
              />
            </div>
          </div>
          <div className="block w-96 sm:hidden">
            <Image src={homepage_pic} alt="find-job-image" className="items-center" />
          </div>
        </main>
      </div>
    </>
  );


}
