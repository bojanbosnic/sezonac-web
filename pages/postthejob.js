import React, { useEffect, useState } from "react";
import { set, ref } from "firebase/database";
import PostJob from "../components/PostJob";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

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
  const jobsid = uuidv4();
  const handleInput = (type, value) => {
    setPostJob({ ...postJob, [type]: value });
  };

  const writeUserData = async (e) => {
    const jobsRef = doc(db, `/users`, `${uid}`);
    await updateDoc(jobsRef, {
      jobs: arrayUnion({
        title: postJob.title,
        city: postJob.city,
        info: postJob.info,
        time: postJob.time,
        money: postJob.money,
        duration: postJob.duration,
        jobsID: jobsid,
      }),
    });
    console.log("---0--->", jobsRef.id);

    await setDoc(
      collection(db, `/global-jobs`, jobsRef.id),
      {
        title: postJob.title,
        city: postJob.city,
        info: postJob.info,
        time: postJob.time,
        money: postJob.money,
        duration: postJob.duration,
        jobsID: jobsid,
      },
      { merge: true },
      { capital: true }
    );

    router.push("/profile");
  };

  console.log("THIS IS FOR GLOBAL DATA", postJob);

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
