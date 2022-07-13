import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useAuth } from "../Context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../firebase";

const register = () => {
  const { register, currentUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmed, setConfirmed] = useState(true);
  const router = useRouter();



  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        setConfirmed(true);
        await register(email, password);
        router.push("/profile");
      } else {
        setConfirmed(false);
      }
      // router.push('/profile')
    } catch (error) {
      console.log(error);
    }
  };

  const displayUser = async () => {
    try {
      if (currentUser) {
        await updateProfile(currentUser, { displayName: displayName });
        router.push("/profile");
      }
    } catch (error) {
      console.log("displayName error:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      displayUser();
      router.push("/profile");
    }
  }, []);

  return (
    <div className="container">
      <main className="flex justify-center items-center flex-col my-9">
        <section className="text-center">
          <h1>Registruj se</h1>
          <h2>Molimo vas da u formi ispod upišete svoje podatke</h2>
        </section>
        <form className="w-2/4 text-white md:w-full">
          <div className="my-12">
            <label htmlFor="name_id">Ime kompanije</label>
            <div>
              <input
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                id="name_id"
                className="input_field_registration"
                type="text"
                placeholder="Moja Firma"
                name="inputField"
              />
            </div>
          </div>
          <div className="my-12">
            <label htmlFor="email_id">Email</label>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email_id"
                className="input_field_registration"
                type="email"
                placeholder="korisnik@gmail.com"
                name="inputField"
              />
            </div>
          </div>
          <div className="my-12">
            <label htmlFor="password_id">Lozinka</label>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password_id"
                className="input_field_registration"
                type="password"
                placeholder="••••••"
                name="inputField"
              />
            </div>
          </div>
          {!confirmed && (
            <div>
              <h2>Lozinke se ne poklapaju</h2>
            </div>
          )}
          <div className="my-12">
            <label htmlFor="confirm_password_id">Potvrdi Lozinku</label>
            <div>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                id="confirm_password_id"
                className="input_field_registration"
                type="password"
                placeholder="••••••"
                name="inputField"
              />
            </div>
          </div>
          <button
            onClick={handleRegister}
            className="w-full py-5 px-6 border-none mb-4 bg-secondary text-white pointer rounded-lg"
          >
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
