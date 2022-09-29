import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import PostJobInput from "../PostJobInput";

const Interface = () => {
  const { currentUser } = useContext(AuthContext);
  const { uid, photoURL, displayName } = currentUser;
  const [postJob, setPostJob] = useState({
    title: "",
    location: "",
    money: "",
    workDuration: "",
    website: "",
    email: "",
  });

  const router = useRouter();

  const handleJob = (type, value) => {
    setPostJob({ ...postJob, [type]: value });
  };

  const writeUserData = async (e) => {
    const jobId = uuidv4();

    const jobRef = doc(db, `/jobs`, jobId);
    await setDoc(jobRef, {
      title: postJob.title,
      location: postJob.location,
      money: postJob.money,
      workDuration: postJob.workDuration,
      email: postJob.email,
      webiste: postJob.website,
      photo: photoURL,
      company: displayName,
      creatorID: uid,
      jobID: jobId,
    });

    window.location.reload(false);
  };

  return (
    <div>
      <PostJobInput
        jobName="Naslov Posla"
        placeHolder="Barmen"
        inputType="text"
        handleJobFun={(e) => handleJob("title", e.target.value)}
      />
      <PostJobInput
        jobName="Lokacija"
        placeHolder="Beograd, Knjeginje Ljubice 5 11000"
        inputType="text"
        handleJobFun={(e) => handleJob("location", e.target.value)}
      />
      <PostJobInput
        jobName="Satnica"
        placeHolder="$5"
        inputType="number"
        handleJobFun={(e) => handleJob("money", e.target.value)}
      />
      <PostJobInput
        jobName="Radno Vrijeme"
        placeHolder="8 sati"
        inputType="number"
        handleJobFun={(e) => handleJob("workDuration", e.target.value)}
      />
      <PostJobInput
        jobName="Website"
        placeHolder="www.hotelexamle.com"
        inputType="text"
        handleJobFun={(e) => handleJob("website", e.target.value)}
      />
      <PostJobInput
        jobName="Email Adresa"
        placeHolder="hotel.example@example.com"
        inputType="email"
        handleJobFun={(e) => handleJob("email", e.target.value)}
      />

      <button onClick={writeUserData}>Zavrsi Objavi</button>
    </div>
  );
};

export default Interface;
