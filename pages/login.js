import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function LogIn() {
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
          <button className="w-full py-5 px-6 border-none mt-12 mb-4 bg-secondary text-white pointer rounded-lg">
            Prijavi se
          </button>
          <div style={{ textAlign: "center" }}>
            Nemaš nalog?{" "}
            <a href="#stranicaRegistracije">
              <span style={{ color: "red" }}> Registruj se besplatno </span>
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}