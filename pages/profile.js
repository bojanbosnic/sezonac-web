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

export default function Profile({ loggedIn }) {
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(currentUser.photoURL);
  const router = useRouter();
  const [page, setPage] = useState("page1");

  const myPages = () => {
    if (page === "page1") {
      return <Page1 />;
    } else if (page === "page2") {
      return <Page2 />;
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

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="container lg:px-8 sm:p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main className="flex justify-between lg:flex-wrap  mt-12">
          <div className="w-1/4 bg-secondary lg:w-full my-8 mr-8 block">
            <div className="flex items-center justify-center flex-col h-full  lg:flex lg:items-center sm:block">
              <div>
                <div className="w-60 h-60 flex realtive items-center border border-white my-8 px-4 py-20 lg:py-14">
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
                  <li className="flex items-center">
                    <FaUserAlt className="text-primary mr-2" />
                    <h3>{currentUser.displayName}</h3>
                  </li>
                  <li
                    className="flex items-center"
                    onClick={() => setPage("page1")}
                  >
                    <AiFillFileMarkdown className="text-primary mr-2" />
                    Moji Poslovi
                  </li>
                  <li
                    className="flex items-center"
                    onClick={() => setPage("page2")}
                  >
                    <FaSave className="text-primary mr-2" />
                    Sačuvani Poslovi
                  </li>
                  <li
                    className="flex items-center"
                    onClick={() => setPage("page3")}
                  >
                    <AiOutlineGlobal className="text-primary mr-2" />
                    Globalni Poslovi
                  </li>
                  <li className="flex items-center">
                    <RiFileUploadFill className="text-primary mr-2" />
                    Objavi Posao
                  </li>
                  <li>
                    <button
                      className="flex items-center"
                      onClick={handleLogOut}
                    >
                      <HiOutlineLogout className="text-primary mr-2" />
                      Odjavi Se
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="w-3/4 my-4 lg:w-full">
            <div className="h-full border border-white px-6">{myPages()}</div>
          </section>
        </main>
      )}
    </div>
  );
}
