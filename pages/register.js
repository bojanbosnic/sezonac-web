import React, { useState, useEffect } from "react";
import SignUp from "../components/SignUp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";
import Link from "next/link";
import LoadingSpinner from "../components/LoadingSpinner";
import { useRouter } from "next/router";
import createUser from "../utils/createUser";
import { FaBuilding } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

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
      await createUser({
        displayName: form.displayName,
        email: form.email,
        id: auth.currentUser.uid,
      });
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
            <h2 className="font-normal">
              Molimo vas da u formi ispod upišete svoje podatke
            </h2>
          </section>

          <SignUp
            name="Firma"
            id="title_id"
            placeHolder="Naziv firme"
            funkcija={(e) => handleForm("displayName", e.target.value)}
            vrednost={form.displayName}
            type="text"
            icon={
              <FaBuilding className="absolute z-20 top-[28px] text-primary left-[12px]" />
            }
          />

          <SignUp
            name="Email"
            id="email_id"
            placeHolder="ime.prezime@example.com"
            funkcija={(e) => handleForm("email", e.target.value)}
            vrednost={form.email}
            type="email"
            icon={
              <MdAlternateEmail className="absolute z-20 top-[28px] text-primary left-[12px]" />
            }
          />

          <SignUp
            name="Lozinka"
            id="password_id"
            placeHolder="● ● ● ● ● ● "
            funkcija={(e) => handleForm("password", e.target.value)}
            vrednost={form.password}
            type="password"
            icon={
              <RiLockPasswordFill className="absolute z-20 top-[28px] text-primary left-[12px]" />
            }
          />

          <SignUp
            name="Potvrdi Lozinku"
            id="cpassword_id"
            placeHolder="● ● ● ● ● ● "
            funkcija={(e) => handleForm("confirmPassword", e.target.value)}
            vrednost={form.confirmPassword}
            type="password"
            icon={
              <RiLockPasswordFill className="absolute z-20 top-[28px] text-primary left-[12px]" />
            }
          />

          {!confirmed && <h1>Lozinke se ne poklapaju!!</h1>}

          <button
            onClick={handleRegister}
            className="w-2/4  py-5 px-6 border-none mb-4 bg-primary text-white font-medium pointer rounded-lg md:w-full"
          >
            Registruj se
          </button>
          <div className="text-center font-medium">
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
