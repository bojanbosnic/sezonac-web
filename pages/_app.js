import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-primary text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
