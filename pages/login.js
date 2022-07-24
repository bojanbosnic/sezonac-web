import Link from "next/link";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <div className="container">
      <main className="flex justify-center items-center flex-col">
        <section className="text-center">
          <h1>Prijavite se</h1>
          <h2>Molimo vas da u formi ispod upišete svoje podatke</h2>
        </section>
        <form className="w-1/2 text-white md:w-full">
          <div className="my-12">
            <label htmlFor="email_id">Email</label>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email_id"
                className="input_field_login"
                type="email"
                placeholder="Unesi svoj email"
                name="inputField"
              />
            </div>
          </div>
          <div className="my-12" style={{ margin: "1.5rem 0" }}>
            <label htmlFor="password_id">Lozinka</label>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password_id"
                className="input_field_login"
                type="password"
                placeholder="••••••"
                name="inputField"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center mr-12 mb-4">
              <input
                id="checkbox_id"
                type={`checkbox`}
                name="InputCheckBoxFiled"
              />
              <label htmlFor="checkbox_id" style={{ marginLeft: "0.5rem" }}>
                Zapamti za 30 dana
              </label>
            </div>
            <div>
              <a href="#">Zaboravio/la si lozinku?</a>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-5 px-6 border-none mt-12 mb-4 bg-secondary text-white pointer rounded-lg"
          >
            Prijavi se
          </button>
          <div style={{ textAlign: "center" }}>
            Nemaš nalog?{" "}
            <Link href="/register">
              <a>
                <span style={{ color: "red" }}> Registruj se besplatno </span>
              </a>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
