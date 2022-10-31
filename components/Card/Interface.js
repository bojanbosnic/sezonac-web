import React, { useState, useContext, useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import {
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const {
    id,
    title,
    money,
    city,
    profileID,
    loggedIn,
    photo,
    website,
    isSaved,
  } = props;
  const { currentUser } = useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(isSaved);
  const { uid } = currentUser;

  const saveJob = async () => {
    if (loggedIn) {
      console.log("POSO SACUVAN")
      const jobsRef = doc(db, `users`, `${uid}`);
      await updateDoc(jobsRef, {
        savedJobs: arrayUnion({
          jobsID: id,
          profileid: profileID,
          isSaved: true,
        }),
      });
      setIsDisabled(true);
    } else {
      console.log("Napravi nalog!!");
    }
  };

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  const btnsFunciton = () => {
    if (!loggedIn) {
      return (
        <>
          <button
            onClick={(e) => e.stopPropagation()}
            disabled={isDisabled}
            className="ml-2"
          >
            <BsBookmark
              className="text-3xl cursor-not-allowed"
              style={{ color: "red" }}
            />
          </button>
        </>
      );
    } else if (currentUser.uid === profileID) {
      return;
    } else {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            saveJob();
            showToastMessage();
          }}
          disabled={isDisabled}
        >
          {isSaved || isDisabled ? (
            <BsBookmarkFill className="text-2xl text-primary" />
          ) : (
            <BsBookmark className="text-2xl text-primary" />
          )}
        </button>
      );
    }
  };

  return (
    <>
      <div className="relative flex justify-between">
        <div className="flex items-center">
          <div
            style={{
              backgroundImage: `url(${photo})`,
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col ml-4">
            <h3 className="m-0">{title}</h3>
            <div className="flex items-center mt-2">
              <HiOutlineLocationMarker className="text-green" />
              <p className="text-green ml-2">{city}</p>
            </div>
          </div>
        </div>
        <div className="z-10">{btnsFunciton()}</div>
      </div>
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h4 className="font-medium m-0">{website}</h4>
          <h4 className="font-medium m-0">${money} /Po Satu</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
