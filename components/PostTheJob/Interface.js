import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import PostJobInput from "../PostJobInput";
import { FaBuilding, FaGlobeAmericas, FaAddressCard } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdAlternateEmail, MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
      <h1 className="text-xl font-medium mx-6">Objavite Posao</h1>
      <hr />
      <div className="px-6">
        <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-1">
          <PostJobInput
            jobName="Naslov Posla"
            placeHolder="Barmen"
            inputType="text"
            icon={
              <FaAddressCard className="absolute z-20 top-[28px] text-primary left-[8px]" />
            }
            handleJobFun={(e) => handleJob("title", e.target.value)}
          />
          <PostJobInput
            jobName="Lokacija"
            placeHolder="Beograd, Knjeginje Ljubice 5 11000"
            inputType="text"
            icon={
              <HiLocationMarker className="absolute z-20 top-[28px] text-primary left-[8px]" />
            }
            handleJobFun={(e) => handleJob("location", e.target.value)}
          />
        </div>

        <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-1">
          <PostJobInput
            jobName="Satnica"
            placeHolder="5"
            inputType="number"
            icon={
              <RiMoneyDollarCircleFill className="absolute z-20 top-[28px] text-primary left-[8px]" />
            }
            handleJobFun={(e) => handleJob("money", e.target.value)}
          />
          <PostJobInput
            jobName="Radno Vrijeme"
            placeHolder="8 sati"
            inputType="number"
            icon={
              <MdOutlineAccessTimeFilled className="absolute z-20 top-[28px] text-primary left-[8px]" />
            }
            handleJobFun={(e) => handleJob("workDuration", e.target.value)}
          />
        </div>
        <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-1">
          <PostJobInput
            jobName="Website"
            placeHolder="www.hotelexamle.com"
            inputType="text"
            icon={
              <FaGlobeAmericas className="absolute z-20 top-[28px] text-primary left-[8px]" />
            }
            handleJobFun={(e) => handleJob("website", e.target.value)}
          />
          <PostJobInput
            jobName="Email Adresa"
            placeHolder="hotel.example@example.com"
            inputType="email"
            icon={
              <MdAlternateEmail className="absolute z-20 top-[28px] text-primary left-[8px]" />
            }
            handleJobFun={(e) => handleJob("email", e.target.value)}
          />
        </div>

        <button
          className="flex items-center bg-primary hover:bg-sky-700 font-medium border-2 rounded-lg text-sm py-4 px-8 text-white md:py-4 sm:w-full"
          onClick={writeUserData}
        >
          Završi Objavu
        </button>
      </div>
    </div>
  );
};

export default Interface;
