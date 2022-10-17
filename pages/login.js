import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import LoadingSpinner from "../components/LoadingSpinner";

export default function LogIn({ loggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      router.push("/profile");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className="flex justify-center items-center flex-col">
          <section className="text-center">
            <h1>Prijavite se</h1>
            <h2 className="font-normal">
              Molimo vas da u formi ispod upišete svoje podatke
            </h2>
          </section>
          <form className="w-1/2 text-white md:w-full">
            <div className="my-12">
              <label htmlFor="email_id" className="font-medium text-black">
                Email
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email_id"
                  className="input_field_login relative pl-10 z-10"
                  type="email"
                  placeholder="ime.prezime@example.com"
                  name="inputField"
                />
                <label htmlFor="email_id">
                  <MdAlternateEmail className="absolute z-20 top-[28px] text-primary left-[14px]" />
                </label>
              </div>
            </div>
            <div className="my-12" style={{ margin: "1.5rem 0" }}>
              <label htmlFor="password_id" className="font-medium text-black">
                Lozinka
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password_id"
                  className="input_field_login relative pl-10 z-10"
                  type="password"
                  placeholder="••••••"
                  name="inputField"
                />
                <label htmlFor="password_id">
                  <RiLockPasswordFill className="absolute z-20 top-[28px] text-primary left-[14px]" />
                </label>
              </div>
            </div>
            <div className="text-black font-medium my-4">
              <a href="#">Zaboravio/la si lozinku?</a>
            </div>
            <button onClick={handleLogin} className="w-full submit_btn_form">
              Prijavi se
            </button>
            <div className="pointer text-black font-medium text-center mt-4 mb-8">
              Nemaš nalog?{" "}
              <Link href="/register">
                <a>
                  <span style={{ color: "red" }}> Registruj se </span>
                </a>
              </Link>
            </div>
          </form>
        </main>
      )}
    </div>
  );
}
