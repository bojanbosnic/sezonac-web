import React, { useContext, useEffect, useState } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Link from "next/link";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { auth, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Profile({ src }) {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(currentUser.photoURL);

  const uploadPhoto = async (photo) => {
    try {
      const fileRef = ref(storage, `${currentUser.uid}` + ".png");

      console.log("file ref : ", fileRef);
      setLoading(true);
      await uploadBytes(fileRef, photo);
      const downloadPhoto = await getDownloadURL(fileRef);
      console.log("DOWLOAD PHOTO", downloadPhoto);
      await updateProfile(auth.currentUser, { photoURL: downloadPhoto });

   
      setLoading(false);
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

  return (
    <div className="container lg:px-8 sm:p-4">
      <main className="flex justify-between lg:flex-wrap  mt-12">
        <div className="w-1/4 lg:w-full my-8 mr-8 block">
          <div className="h-full  lg:flex lg:items-center sm:block">
            <div>
              <div>Ime kompanije: {currentUser.displayName}</div>
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
                  {/* <button
                    disabled={loading || !photo}
                    onClick={
                      uploadPhoto
                    }
                    style={{ margin: "2rem 0" }}
                  >
                    Click here!
                  </button> */}
                </div>
              </div>
              <div className="flex items-end order-2">
                <Link href={"/settings"}>
                  <a>
                    <p className="">Podešavanje</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full lg:mx-4 sm:mx-0">
              <div className="flex flex-col">
                <p className="my-2">Email: {currentUser.email}</p>
              </div>

              <div className="flex flex-col">
                <p className="my-2">
                  Datum registracije: {currentUser.lastSignIn}
                </p>
                <p className="my-2">ID korisnika: {currentUser.uid}</p>
              </div>
            </div>
          </div>
        </div>
        <section className="w-3/4 my-4 lg:w-full">
          <div className="h-full border border-white px-6">
            <ProfileNavbar />
          </div>
        </section>
      </main>
    </div>
  );
}
