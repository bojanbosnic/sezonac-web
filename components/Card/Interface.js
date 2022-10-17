import React, { useState, useContext } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { BsBookmark, BsBookmarkFill, BsJournalBookmark } from "react-icons/bs";

const Card = (props) => {
  const { id, title, money, city, profileID, loggedIn, photo, website } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;

  const saveJob = async () => {
    if (loggedIn) {
      const jobsRef = doc(db, `users`, `${uid}`);
      await updateDoc(jobsRef, {
        savedJobs: arrayUnion({
          jobsID: id,
          profileid: profileID,
        }),
      });
      setIsDisabled(true);
    } else {
      alert("Napravi nalog!!");
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
            <BsBookmark className="text-xl" style={{ color: "red" }} />
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
          style={{ color: "black" }}
        >
          Own Job
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
          {isDisabled ? (
            <>
              <BsBookmarkFill
                disabled={isDisabled}
                className="text-xl"
                style={{ color: "#1967d2" }}
              />
            </>
          ) : (
            <BsBookmark className="text-xl" style={{ color: "#1967d2" }} />
          )}
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
              <HiOutlineLocationMarker className="text-[#00ca99]" />
              <p className="text-[#00ca99] ml-2">{city}</p>
            </div>
          </div>
        </div>

        <div className=" z-10">{btnsFunciton()}</div>
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
