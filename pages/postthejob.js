import React, { useEffect, useState } from "react";
import { set, ref } from "firebase/database";
import PostJob from "../components/PostJob";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";

const Interface = () => {
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;
  const router = useRouter();
  const [postJob, setPostJob] = useState({
    title: "",
    city: "",
    info: "",
    time: "",
    money: "",
    duration: "",
  });

  const handleInput = (type, value) => {
    setPostJob({ ...postJob, [type]: value });
  };

  const writeUserData = (e) => {
     addDoc(collection(db, `/${uid}`), {
      title: postJob.title,
      city: postJob.city,
      info: postJob.info,
      time: postJob.time,
      money: postJob.money,
      duration: postJob.duration,
    });
    router.push('/profile')
    
  };

  return (
    <div className="container lg:px-8 sm:p-4">
      <main className="flex flex-col">
        <h1>Registrujte vaš posao</h1>
        <PostJob
          name="Upišite naslov Vašeg posla"
          placeHolder="Konobar"
          handleFunction={(e) => handleInput("title", e.target.value)}
        />
        <PostJob
          name="Lokacija radnog mjesta"
          placeHolder="Beograd"
          handleFunction={(e) => handleInput("city", e.target.value)}
        />
        <PostJob
          name="Opis posla"
          placeHolder="Potreban radnika za..."
          handleFunction={(e) => handleInput("info", e.target.value)}
        />
        <PostJob
          name="Radno vrijeme"
          placeHolder=" Puno radno vrijeme"
          handleFunction={(e) => handleInput("time", e.target.value)}
        />
        <PostJob
          name="Satnica"
          placeHolder="5 $"
          handleFunction={(e) => handleInput("money", e.target.value)}
        />
        <PostJob
          name="Datum trajanja"
          placeHolder=" 01.01.22-02.02.22"
          handleFunction={(e) => handleInput("duration", e.target.value)}
        />
        <button
          onClick={writeUserData}
          className="w-full border bg-secondary border-secondary rounded-lg py-5 px-6 mb-8"
        >
          Zavrsi Objavu
        </button>
      </main>
    </div>
  );
};

export default Interface;
