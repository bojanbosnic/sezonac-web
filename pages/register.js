import React, { useState, useEffect } from "react";
import SignUp from "../components/SignUp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";
import Link from "next/link";
import LoadingSpinner from "../components/LoadingSpinner";
import { useRouter } from "next/router";
import createUsers from "../utils/createUsers";

const Register = ({ loggedIn }) => {
  const [confirmed, setConfirmed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const router = useRouter();

  const { displayName, email } = form;

  const handleRegister = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setConfirmed(false);
      return;
    }
    setConfirmed(true);

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      console.log("User after register", auth.currentUser.displayName);
      await updateProfile(auth.currentUser, { displayName: form.displayName });
      console.log("User after update profile", auth.currentUser.displayName);
      setCurrentUser({ ...currentUser, displayName: form.displayName });
      await createUsers({ id: auth.currentUser.uid, displayName, email });

      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (type, value) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    } else {
      setIsLoading(true);
    }
  }, []);

  return (
    <div className="container">
      {!isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className="flex justify-center items-center flex-col my-9">
          <section className="text-center">
            <h1>Registruj se</h1>
            <h2>Molimo vas da u formi ispod upišete svoje podatke</h2>
          </section>

          <SignUp
            name="Firma"
            placeHolder="Upisi naziv firme"
            funkcija={(e) => handleForm("displayName", e.target.value)}
            vrednost={form.displayName}
            type="text"
          />

          <SignUp
            name="Email"
            placeHolder="Email"
            funkcija={(e) => handleForm("email", e.target.value)}
            vrednost={form.email}
            type="email"
          />

          <SignUp
            name="Lozinka"
            placeHolder="Upisi Lozinku"
            funkcija={(e) => handleForm("password", e.target.value)}
            vrednost={form.password}
            type="password"
          />

          <SignUp
            name="Potvrdi Lozinku"
            placeHolder="Ponovi lozinku"
            funkcija={(e) => handleForm("confirmPassword", e.target.value)}
            vrednost={form.confirmPassword}
            type="password"
          />

          {!confirmed && <h1>Lozinke se ne poklapaju!!</h1>}

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
        </main>
      )}
    </div>
  );
};

export default Register;
