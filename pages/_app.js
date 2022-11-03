import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import AuthProvider from "../Context/AuthContext";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("Token") : null;

  const test = "test123";
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Sezonac</title>
        </Head>
        <Component loggedIn={!!token} test={test} {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
