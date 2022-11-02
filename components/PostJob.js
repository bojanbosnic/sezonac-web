import React, { useEffect } from "react";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import PostJobInput from "./PostJobInput";
import { FaGlobeAmericas, FaAddressCard } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdAlternateEmail, MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

const PostJob = () => {
  const { currentUser } = useContext(AuthContext);
  const { uid, photoURL, displayName } = currentUser;

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      title: "",
      location: "",
      money: "",
      workDuration: "",
      website: "",
      email: "",
    },
    mode: "onChange",
  });

  const postJobFun = async (props) => {
    const { title, location, money, workDuration, email, website } = props;

    const jobId = uuidv4();
    const jobRef = doc(db, `/jobs`, jobId);
    await setDoc(jobRef, {
      title,
      location,
      money,
      workDuration,
      email,
      website,
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
        <form onSubmit={handleSubmit(postJobFun)}>
          <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-1">
            <PostJobInput
              register={register}
              jobName="Naslov Posla"
              name="title"
              placeHolder="Barmen"
              inputType="text"
              error={errors.title?.message}
              rules={{
                required: {
                  value: true,
                  message: "Ovo polje je obavezno.",
                },
                minLength: {
                  value: 6,
                  message: "Minimalna vrijednost je 6 slova!",
                },
              }}
              icon={
                <FaAddressCard className="absolute z-20 top-[28px] text-primary left-[8px]" />
              }
            />

            <PostJobInput
              register={register}
              jobName="Lokacija"
              name="location"
              placeHolder="Beograd, Knjeginje Ljubice 5 11000"
              inputType="text"
              error={errors.title?.message}
              rules={{
                required: {
                  value: true,
                  message: "Ovo polje je obavezno.",
                },
              }}
              icon={
                <HiLocationMarker className="absolute z-20 top-[28px] text-primary left-[8px]" />
              }
            />
          </div>

          <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-1">
            <PostJobInput
              register={register}
              jobName="Satnica"
              placeHolder="5"
              inputType="number"
              error={errors.money?.message}
              rules={{
                required: {
                  value: true,
                  message: "Ovo polje je obavezno.",
                },
              }}
              name="money"
              icon={
                <RiMoneyDollarCircleFill className="absolute z-20 top-[28px] text-primary left-[8px]" />
              }
            />
            <PostJobInput
              register={register}
              jobName="Radno Vrijeme"
              placeHolder="8 sati"
              inputType="number"
              error={errors.workDuration?.message}
              rules={{
                required: {
                  value: true,
                  message: "Ovo polje je obavezno.",
                },
              }}
              name="workDuration"
              icon={
                <MdOutlineAccessTimeFilled className="absolute z-20 top-[28px] text-primary left-[8px]" />
              }
            />
          </div>
          <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-1">
            <PostJobInput
              register={register}
              jobName="Website"
              placeHolder="www.hotelexamle.com"
              inputType="text"
              error={errors.website?.message}
              rules={{
                required: {
                  value: true,
                  message: "Ovo polje je obavezno.",
                },
              }}
              name="website"
              icon={
                <FaGlobeAmericas className="absolute z-20 top-[28px] text-primary left-[8px]" />
              }
            />
            <PostJobInput
              register={register}
              jobName="Email Adresa"
              placeHolder="hotel.example@example.com"
              inputType="email"
              error={errors.email?.message}
              rules={{
                required: {
                  value: true,
                  message: "Ovo polje je obavezno.",
                },
              }}
              name="email"
              icon={
                <MdAlternateEmail className="absolute z-20 top-[28px] text-primary left-[8px]" />
              }
            />
          </div>
          <button className="flex items-center bg-primary hover:bg-sky-700 font-medium border-2 rounded-lg text-sm py-4 px-8 text-white md:py-4 sm:w-full">
            Završi Objavu
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
