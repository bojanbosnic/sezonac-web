import Image from "next/image";
import Link from "next/link";
import homepage_pic from "../assets/ilustrations/0f5b8b79722289.5ccbece3c3379.gif";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";

export default function Home({ loggedIn }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container mx-auto sm:px-8">
          <main className="h-screen flex items-center z-20 flex-wrap justify-between lg:justify-center   sm:h-screen">
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
      </div>
    </>
  );
}
