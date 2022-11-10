import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import AuthProvider from "../Context/AuthContext";
import Head from "next/head";
import { Rubik } from "@next/font/google";

const rubik = Rubik({
  weight: "400",
});

function MyApp({ Component, pageProps }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("Token") : null;

  return (
    <>
      <AuthProvider>
        <Head>
          <title>Sezonac</title>
        </Head>
        <main className={rubik.className}>
          <Component loggedIn={!!token} {...pageProps} />
        </main>
      </AuthProvider>
    </>
  );
}

export default MyApp;
