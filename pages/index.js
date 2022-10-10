import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";
import { FiLogIn } from "react-icons/fi";
import barmen_picture from "../assets/ilustrations/commercial_photo_barmen.webp";
const token =
  typeof window !== "undefined" ? localStorage.getItem("Token") : null;

export default function Home({ loggedIn }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container mx-auto sm:px-8">
          <Navbar loggedIn={!!token} />
          <main className="flex items-center z-20 grid grid-cols-2 gap-4  justify-between lg:justify-center   sm:h-screen">
            <div className="text-left md:my-8">
              <div>
                <h1 className="leading-normal sm:text-4xl">
                  Tražiš{" "}
                  <span className="underline text-primary">
                    Sezonski Posao?
                  </span>
                  <span className="block">Tražiš radnike?</span>
                </h1>
                <p className="color-red my-8 w-1/2 lg:w-full">
                  Na ovom sajtu imate razne ponude i opcije poslova u zemljama
                  regiona. Ako ste zainteresovani za takav vid saradnje ili
                  imate vlastitu firmu za ponudu poslova onda je ovo pravo
                  mjesto za vas!
                </p>
              </div>
              <div className="flex items-center sm:flex-col">
                <Link href="/jobs">
                  <a>
                    <Button
                      name="Potraži posao"
                      bgColor="bg-primary"
                      hover="hover:bg-sky-700"
                      textColor="text-white"
                      paddingY="py-4"
                      paddingX="px-8"
                    />
                  </a>
                </Link>
                {loggedIn ? (
                  <Link href="/profile">
                    <a>
                      <Button
                        name="Objavi Posao"
                        bgColor="bg-primary"
                        hover="hover:bg-sky-700"
                        textColor="text-white"
                        paddingY="py-4 md:py-4"
                        paddingX="px-8"
                        marginRight="mr-4"
                      />
                    </a>
                  </Link>
                ) : (
                  <Link href="/register">
                    <a>
                      <Button
                        name="Registruj se"
                        icon={<FiLogIn />}
                        textColor="text-white"
                        bgColor="bg-black"
                        hover="hover:bg-sky-700"
                        paddingY="py-4"
                        paddingX="px-8"
                      />
                    </a>
                  </Link>
                )}
              </div>
            </div>
            <div className="">
              <Image src={barmen_picture} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
