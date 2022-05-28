import React from "react";
import Link from "next/link";
const register = () => {
  return (
    <div className="container">
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "2.5rem 0",
        }}
      >
        <section className="text-center">
          <h1>Registruj se</h1>
          <h2>Molimo vas da u formi ispod upišete svoje podatke</h2>
        </section>
        <form className="w-2/4 text-white md:w-full">
          <div className="my-12">
            <label htmlFor="name_id">Ime</label>
            <div>
              <input
                id="name_id"
                className="input_field_registration"
                type="text"
                placeholder="Unesi svoje ime"
                name="inputField"
              />
            </div>
          </div>
          <div className="my-12">
            <label htmlFor="lastname_id">Prezime</label>
            <div>
              <input
                id="lastname_id"
                className="input_field_registration"
                type="text"
                placeholder="Unesi svoje prezime"
                name="inputField"
              />
            </div>
          </div>
          <div className="my-12">
            <label htmlFor="email_id">Email</label>
            <div>
              <input
                id="email_id"
                className="input_field_registration"
                type="email"
                placeholder="Unesi svoj email"
                name="inputField"
              />
            </div>
          </div>
          <div className="my-12">
            <label htmlFor="password_id">Lozinka</label>
            <div>
              <input
                id="password_id"
                className="input_field_registration"
                type="password"
                placeholder="••••••"
                name="inputField"
              />
            </div>
          </div>
          <div className="my-12">
            <label htmlFor="confirm_password_id">Potvrdi Lozinku</label>
            <div>
              <input
                id="confirm_password_id"
                className="input_field_registration"
                type="password"
                placeholder="••••••"
                name="inputField"
              />
            </div>
          </div>
          <button className="w-full py-5 px-6 border-none mb-4 bg-secondary text-white pointer rounded-lg">
            Registruj se
          </button>
          <div className="text-center">
            Već imaš nalog?
            <Link href="/login">
              <a>
                <span className="text-red-600"> Prijavi se ovde </span>
              </a>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default register;
