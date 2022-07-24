import "tailwindcss/tailwind.css";
import '../styles/globals.css';
import AuthProvider from '../Context/AuthContext';
import Navbar from '../components/Navbar';
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Sezonac</title>
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
