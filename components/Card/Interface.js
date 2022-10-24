import React, { useState, useContext } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { BsBookmark, BsBookmarkFill, BsJournalBookmark } from "react-icons/bs";
import { TbDeviceFloppy } from "react-icons/tb";
import { RiBankFill } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";

const Card = (props) => {
  const { id, title, money, city, profileID, loggedIn, photo, website } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;
  // console.log("Is Saved from server side:", isDisabled);

  const saveJob = async () => {
    if (loggedIn) {
      const jobsRef = doc(db, `users`, `${uid}`);
      await updateDoc(jobsRef, {
        savedJobs: arrayUnion({
          jobsID: id,
          profileid: profileID,
          isSaved: false,
        }),
      });
      setIsDisabled(true);
    } else {
      console.log("Napravi nalog!!");
    }
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
            <TbDeviceFloppy
              className="text-3xl cursor-not-allowed"
              style={{ color: "red" }}
            />
          </button>
        </>
      );
    } else if (currentUser.uid === profileID) {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          disabled={isDisabled}
          className="text-black text-2xl cursor-default"
        >
          <RiBankFill />
        </button>
      );
    } else {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            saveJob();
          }}
          disabled={isDisabled}
        >
          <IoIosSave disabled={isDisabled} className="text-2xl text-black" />
        </button>
      );
    }
  };

  return (
    <>
      <div className="flex justify-between">
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
