import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";
import { FiLogIn } from "react-icons/fi";
import picture from "../assets/ilustrations/right-pic-2.jpg";
import classNames from "classnames";
const Home = ({ loggedIn }) => {
  return (
    <>
      <div>
        <div
          className={classNames(
            `${styles.wrapper} container mx-auto sm:px-8 relative h-screen lg:h-full z-2`
          )}
        >
          <Navbar loggedIn={loggedIn} />
          <main className="flex items-center lg:flex-wrap z-20 mt-20  justify-between">
            <div className="w-3/5 text-left lg:w-full lg:mb-8">
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
                <Link legacyBehavior href="/jobs">
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
                {!loggedIn && (
                  <Link legacyBehavior href="/register">
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
            <div className={classNames(`${styles.initialImage} lg:hidden`)}>
              <Image
                layout="responsive"
                className={styles.initialImage}
                src={picture}
                quality={100}
                alt="Initial photo"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
