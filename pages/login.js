import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import LoadingSpinner from "../components/LoadingSpinner";
import { useForm } from "react-hook-form";

export default function LogIn({ loggedIn }) {
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
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter("");

  const customErrors = (error) => {
    switch (error.message) {
      case "Firebase: Error (auth/user-not-found).":
        setError("password", {
          type: "server",
          message: "User ne postoji!",
        });
        break;
      case "Firebase: Error (auth/wrong-password).":
        setError("password", {
          type: "server",
          message: "Pogresna",
        });
        break;

      default:
        console.log("Postoji problem");
    }
  };
  const handleLogin = async (data) => {
    console.log(data);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push("/profile");
    } catch (error) {
      console.log(error.message);
      customErrors(error);
    }
  };

  // console.log(watch("email"));

  useEffect(() => {
    if (loggedIn) {
      router.push("/profile");
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="w-1/2 text-white md:w-full"
          >
            <div className="my-12">
              <label htmlFor="email_id" className="font-medium text-black">
                Email
              </label>
              <div className="relative">
                <input
                  {...register("email", { required: true, server: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  id="email_id"
                  className="input_field_login relative pl-10 z-10"
                  placeholder="ime.prezime@example.com"
                  type="email"
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Upišite Email!
                  </p>
                )}

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
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Minimalna vrijednost je 6 slova!",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  id="password_id"
                  className="input_field_login relative pl-10 z-10"
                  placeholder="••••••"
                  type="password"
                />
                <p className="text-red-600">{errors.password?.message}</p>
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Upišite Lozinku!
                  </p>
                )}

                {errors.password?.type === "server" && errors.password.message}

                <label htmlFor="password_id">
                  <RiLockPasswordFill className="absolute z-20 top-[28px] text-primary left-[14px]" />
                </label>
              </div>
            </div>
            <div className="text-black font-medium my-4">
              <a href="#">Zaboravio/la si lozinku?</a>
            </div>
            <button className="w-full submit_btn_form">Prijavi se</button>
            <div className="pointer text-black font-medium text-center mt-4 mb-8">
              Nemaš nalog?{" "}
              <Link legacyBehavior href="/register">
                <a>
                  <span className="text-red-600"> Registruj se </span>
                </a>
              </Link>
            </div>
          </form>
        </main>
      )}
    </div>
  );
}
