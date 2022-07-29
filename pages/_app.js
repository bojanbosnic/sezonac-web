import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import AuthProvider from "../Context/AuthContext";
import Navbar from "../components/Navbar";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("Token") : null;

  return (
    <>
      <AuthProvider>
        <Head>
          <title>Sezonac</title>
        </Head>
        <Navbar loggedIn={!!token} />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
