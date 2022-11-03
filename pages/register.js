import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";
import LoadingSpinner from "../components/LoadingSpinner";
import { useRouter } from "next/router";
import createUser from "../utils/createUser";
import { FaBuilding } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Register = ({ loggedIn }) => {
  const [confirmed, setConfirmed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
    },
  });

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const router = useRouter();

  const customErrors = (error) => {
    if (error.message == "Firebase: Error (auth/email-already-in-use).") {
      setError("email", {
        type: "server",
        message: "Email je već u upotrebi!",
      });
    }
  };

  const handleRegister = async (data) => {


    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("User after register", auth.currentUser.displayName);
      await updateProfile(auth.currentUser, { displayName: data.firstName });
      console.log("User after update profile", auth.currentUser.displayName);
      setCurrentUser({ ...currentUser, displayName: data.firstName });
      await createUser({
        displayName: data.firstName,
        email: data.email,
        id: auth.currentUser.uid,
      });
      router.push("/profile");
    } catch (error) {
      customErrors(error);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    } else {
      setIsLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="w-2/4 text-white md:w-full"
          >
            <div className="my-4">
              <label htmlFor="id" className="font-medium text-black">
                Firma
              </label>
              <div className="relative">
                <input
                  {...register("firstName", { required: true, server: true })}
                  className="input_field_login relative pl-10 z-10"
                  id="title_id"
                  placeHolder="Naziv firme"
                  type="text"
                />
                {errors.firstName?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Title is required
                  </p>
                )}

                <label htmlFor="id">
                  <FaBuilding className="absolute z-20 top-[28px] text-primary left-[12px]" />
                </label>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="id" className="font-medium text-black">
                Email
              </label>
              <div className="relative">
                <input
                  {...register("email", { required: true, server: true })}
                  className="input_field_login relative pl-10 z-10"
                  id="title_id"
                  placeHolder="ime.example@gmail.com"
                  type="email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Email is required
                  </p>
                )}
                {errors.email?.type === "server" && errors.email.message}
                <label htmlFor="id">
                  <MdAlternateEmail className="absolute z-20 top-[28px] text-primary left-[12px]" />
                </label>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="id" className="font-medium text-black">
                Lozinka
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Minimalna vrijednost je 6 slova!",
                    },
                  })}
                  className="input_field_login relative pl-10 z-10"
                  id="title_id"
                  placeHolder="● ● ● ● ● ●"
                  type="password"
                />
                <p className="text-red-600">{errors.password?.message}</p>
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Password is required
                  </p>
                )}

                <label htmlFor="id">
                  <RiLockPasswordFill className="absolute z-20 top-[28px] text-primary left-[12px]" />
                </label>
              </div>
            </div>

            <button className="w-full  py-5 px-6 border-none mb-4 bg-primary text-white font-medium pointer rounded-lg">
              Registruj se
            </button>
            <div className="text-center text-black font-medium">
              Već imaš nalog?
              <Link legacyBehavior href="/login">
                <a>
                  <span className="text-red-600"> Prijavi se ovde </span>
                </a>
              </Link>
            </div>
          </form>
        </main>
      )}
    </div>
  );
};

export default Register;
