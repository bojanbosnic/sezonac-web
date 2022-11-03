import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoadingSpinner from "../components/LoadingSpinner";
import { signOut } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { auth, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";
import { AiFillFileMarkdown, AiOutlineGlobal } from "react-icons/ai";
import { FaSave, FaUserAlt } from "react-icons/fa";
import { RiFileUploadFill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import PrivateJobs from "../components/PrivateJobs";
import SavedJobs from "../components/SavedJobs";
import PostJob from "../components/PostJob";
import Navbar from "../components/Navbar";
import userIcon from "../assets/ilustrations/2.jpg";

import { getDocs, collection, doc, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function Profile({ loggedIn }) {
  const { currentUser } = useContext(AuthContext);

  const { uid } = currentUser;
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(currentUser.photoURL);
  const router = useRouter();
  const [page, setPage] = useState("page1");
  const [savedJobsID, setSavedJobsID] = useState([]);

  const myPages = () => {
    if (page === "page1") {
      return <PrivateJobs />;
    } else if (page === "page2") {
      return <SavedJobs savedJobsID={savedJobsID} />;
    } else if (page === "page3") {
      return <PostJob />;
    }
  };

  const uploadPhoto = async (photo) => {
    try {
      const fileRef = ref(storage, `${currentUser.uid}` + ".png");
      await uploadBytes(fileRef, photo);
      const downloadPhoto = await getDownloadURL(fileRef);
      console.log("DOWLOAD PHOTO", downloadPhoto);
      await updateProfile(auth.currentUser, { photoURL: downloadPhoto });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      uploadPhoto(e.target.files[0]);
      console.log(
        "create object url: ",
        URL.createObjectURL(e.target.files[0])
      );

      setImage(URL.createObjectURL(e.target.files[0]));

      console.log("slika: ", e.target.files);
    }
  };
  const handleLogOut = async (e) => {
    try {
      localStorage.removeItem("Token");
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserSaved = async () => {
    const userSavedJobs = [];
    const usersRef = collection(db, "/users");
    const q = query(usersRef, where("userID", "==", uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      userSavedJobs.push(...doc.data().savedJobs);
    });
    setSavedJobsID(userSavedJobs);
  };

  useEffect(() => {
    if (loggedIn) {
      getUserSaved();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let src = image ? image : userIcon.src;

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container lg:px-8 sm:p-4">
          <Navbar loggedIn={!!loggedIn} />
          <main className="flex justify-between my-12  lg:flex-wrap">
            <div className="w-1/5 bg-secondary  lg:w-full mr-8 block rounded-3xl lg:mr-0 lg:mb-8">
              <div className=" h-full p-[30px] lg:flex lg:justify-around  lg:items-center md:justify-center sm:block">
                <div>
                  <div className="flex items-center justify-center">
                    <FaUserAlt className="text-primary mr-2" />
                    <h3 className="m-0">{currentUser.displayName}</h3>
                  </div>
                  <div className="flex justify-center lg:w-[350px] md:w-full realtive border border-white mt-8 p-4 rounded-xl lg:py-12">
                    <div className="text-center lg:w-[80%]  overflow-hidden">
                      <Image
                        loader={() => src}
                        src={src}
                        width={800}
                        height={800}
                        alt="user-picture"
                      />
                    </div>
                  </div>
                  <div className="relative text-center my-4 mb-6">
                    <input
                      onChange={(e) => {
                        handleImage(e);
                      }}
                      className="w-1 h-1 absolute opacity-0"
                      type="file"
                      id="myImage"
                      name="profile_img"
                      accept="image/png, image/jpg"
                    />
                    <label
                      htmlFor="myImage"
                      className="bg-primary rounded-xl text-white font-medium text-sm py-2 px-4"
                    >
                      Objavi Sliku
                    </label>
                  </div>
                </div>
                <div>
                  <ul>
                    <li
                      className="flex items-center px-4 py-[0.8rem] cursor-pointer hover:bg-white hover:rounded-3xl ease-in-out duration-300"
                      onClick={() => setPage("page1")}
                    >
                      <AiFillFileMarkdown className="text-primary mr-2" />
                      Moji Poslovi
                    </li>
                    <li
                      className="flex items-center px-4 py-[0.8rem] cursor-pointer hover:bg-white hover:rounded-3xl ease-in-out duration-300"
                      onClick={() => setPage("page2")}
                    >
                      <FaSave className="text-primary mr-2" />
                      Sačuvani Poslovi
                    </li>
                    <a href="/jobs" target="_blank" rel="noopener noreferrer">
                      <li className="flex items-center px-4 py-[0.8rem] cursor-pointer hover:bg-white hover:rounded-3xl ease-in-out duration-300">
                        <AiOutlineGlobal className="text-primary mr-2" />
                        Globalni Poslovi
                      </li>
                    </a>
                    <li
                      className="flex items-center px-4  py-[0.8rem] cursor-pointer hover:bg-white hover:rounded-3xl ease-in-out duration-300"
                      onClick={() => setPage("page3")}
                    >
                      <RiFileUploadFill className="text-primary mr-2" />
                      Objavi Posao
                    </li>
                    <li
                      className="flex items-center px-4 py-[0.8rem] cursor-pointer hover:bg-white hover:rounded-3xl ease-in-out duration-300"
                      onClick={handleLogOut}
                    >
                      <HiOutlineLogout className="text-primary mr-2" />
                      Odjavi Se
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <section className="w-3/4 p-8 bg-[#f5f7f9] rounded-xl lg:w-full">
              <div className="h-full bg-white rounded-xl border border-white">
                {myPages()}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
