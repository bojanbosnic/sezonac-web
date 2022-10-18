import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
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
import Page1 from "../components/PrivateJobs";
import Page2 from "../components/SavedJobs";
import Page4 from "../components/PostTheJob";
import Navbar from "../components/Navbar";

import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  collectionGroup,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { async } from "@firebase/util";

// const token =
//   typeof window !== "undefined" ? localStorage.getItem("Token") : null;

export default function Profile({ loggedIn }) {
  const { currentUser } = useContext(AuthContext);

  const { uid } = currentUser;
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(currentUser.photoURL);
  const router = useRouter();
  const [page, setPage] = useState("page1");
  const [savedJobID, setSavedJobsID] = useState([]);

  const myPages = () => {
    if (page === "page1") {
      return <Page1 />;
    } else if (page === "page2") {
      return <Page2 savedJobID={savedJobID} />;
    } else if (page === "page4") {
      return <Page4 />;
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

  // const getUserData = async () => {
  //   const jobovi = [];
  //   const jobsRef = collection(db, "jobs");

  //   const api = query(jobsRef, where("creatorID", "==", uid));

  //   const querySnapshot = await getDocs(api);

  //   querySnapshot.forEach((doc, index) => {
  //     jobovi.push({ ...doc.data() });
  //   });

  //   setUsersJobs(jobovi);
  // };
  // console.log("Ovo mi treba", usersJobs);

  const updateProfilePhoto = async () => {
    const q = query(collection(db, "cities"), where("creatorID", "==", uid));



    // querySnapshot.forEach((doc, index) => {
      updateDoc(q, {
        photo: image,
      }).catch((error) => console.log(error));
    // });
  };

  useEffect(() => {
    updateProfilePhoto();
  }, [image]);

  useEffect(() => {
    getUserSaved();
    // getUserData();
  }, []);

  // sve tefun

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
          <main className="flex justify-between lg:flex-wrap mt-2">
            <div className="w-1/5 bg-secondary lg:w-full my-8 mr-8 block rounded-3xl">
              <div className=" h-full p-[30px]  lg:flex lg:items-center sm:block">
                <div>
                  <div className="flex realtive items-center border border-white my-8 px-4  lg:py-14">
                    <div className="text-center overflow-hidden">
                      <img
                        src={image}
                        alt="User profile picture"
                        style={{ margin: "2rem 0" }}
                      />
                      <input
                        onChange={(e) => {
                          handleImage(e);
                        }}
                        className=""
                        type="file"
                        id="myImage"
                        name="profile_img"
                        accept="image/png, image/jpg"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <ul>
                    <li className="flex items-center px-4 py-2">
                      <FaUserAlt className="text-primary mr-2" />
                      <h3 className="m-0">{currentUser.displayName}</h3>
                    </li>
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
                      onClick={() => setPage("page4")}
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
            <section className="w-3/4 p-8 bg-[#f5f7f9] rounded-xl my-4 lg:w-full">
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
